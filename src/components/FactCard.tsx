// src/components/FactCard.tsx
import React, { useEffect, useRef, useState } from "react";
import { Avatar, Card, IconButton, Text, useTheme } from "react-native-paper";
import ViewShot from "react-native-view-shot";
import ViewShotRef from "react-native-view-shot";
import { CatFact } from "../models/CatFact";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import * as Haptics from "expo-haptics";
import { StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  Easing,
  withTiming,
} from "react-native-reanimated";
import { CopyFactCommand } from "../commands/CopyFactCommand";
import { ShareFactCommand } from "../commands/ShareFactCommand";
import { SaveFactImageCommand } from "../commands/SaveFactImageCommand";
import { ToggleFavoriteCommand } from "../commands/ToggleFavoriteCommand";

interface Props {
  fact: CatFact;
  isFavorite: boolean;
}

export const FactCard: React.FC<Props> = ({ fact, isFavorite }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const viewShotRef = useRef<ViewShotRef>(null);

  const showAdvanced = useSelector(
    (state: RootState) => state.theme.showAdvancedActions
  );

  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);
  const heartScale = useSharedValue(1);
  const copyScale = useSharedValue(1);
  const downloadScale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const animatedHeartStyle = useAnimatedStyle(() => ({
    transform: [{ scale: heartScale.value }],
  }));

  const animatedCopyStyle = useAnimatedStyle(() => ({
    transform: [{ scale: copyScale.value }],
  }));

  const animatedDownloadStyle = useAnimatedStyle(() => ({
    transform: [{ scale: downloadScale.value }],
  }));

  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 400,
      easing: Easing.out(Easing.ease),
    });
    translateY.value = withTiming(0, {
      duration: 400,
      easing: Easing.out(Easing.ease),
    });
  }, []);

  return (
    <Animated.View style={[animatedStyle]}>
      <Card
        style={[
          styles.card,
          {
            backgroundColor: theme.dark ? "#1f1f1f" : theme.colors.surface,
            borderColor: theme.dark
              ? "rgba(255,255,255,0.08)"
              : "rgba(0,0,0,0.08)",
            borderWidth: 1,
            elevation: 4,
          },
        ]}
      >
        <ViewShot
          ref={viewShotRef}
          options={{ format: "png", quality: 1.0 }}
          style={styles.viewShot}
        >
          <Card.Title
            title="Meow Fact"
            titleStyle={styles.title}
            left={(props) => <Avatar.Icon {...props} icon="cat" />}
          />
          <Card.Content>
            <Text style={styles.factText}>{fact.fact}</Text>
          </Card.Content>
        </ViewShot>

        <Card.Actions style={styles.actions}>
          <Animated.View style={animatedHeartStyle}>
            <IconButton
              icon={isFavorite ? "heart" : "heart-outline"}
              iconColor={isFavorite ? "red" : theme.colors.onSurface}
              onPress={async () => {
                heartScale.value = 1.4;
                heartScale.value = withTiming(1, {
                  duration: 250,
                  easing: Easing.out(Easing.ease),
                });
                new ToggleFavoriteCommand(fact, dispatch, isFavorite).execute();
                await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              }}
            />
          </Animated.View>

          <IconButton
            icon="share-variant"
            onPress={() => new ShareFactCommand(fact).execute()}
          />

          {showAdvanced && (
            <>
              <Animated.View style={animatedCopyStyle}>
                <IconButton
                  icon={copied ? "check" : "content-copy"}
                  onPress={async () => {
                    copyScale.value = 1.4;
                    copyScale.value = withTiming(1, {
                      duration: 250,
                      easing: Easing.out(Easing.ease),
                    });
                    await new CopyFactCommand(fact).execute();
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1000);
                    await Haptics.impactAsync(
                      Haptics.ImpactFeedbackStyle.Light
                    );
                  }}
                />
              </Animated.View>

              <Animated.View style={animatedDownloadStyle}>
                <IconButton
                  icon={saved ? "check" : "download"}
                  onPress={async () => {
                    downloadScale.value = 1.4;
                    downloadScale.value = withTiming(1, {
                      duration: 250,
                      easing: Easing.out(Easing.ease),
                    });
                    await new SaveFactImageCommand(viewShotRef).execute();
                    setSaved(true);
                    setTimeout(() => setSaved(false), 1000);
                    await Haptics.impactAsync(
                      Haptics.ImpactFeedbackStyle.Light
                    );
                  }}
                />
              </Animated.View>
            </>
          )}
        </Card.Actions>
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 16,
  },
  viewShot: {
    borderRadius: 16,
    paddingBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  factText: {
    fontSize: 18,
    lineHeight: 24,
    marginVertical: 12,
    textAlign: "center",
  },
  actions: {
    justifyContent: "space-around",
    paddingHorizontal: 8,
  },
});
