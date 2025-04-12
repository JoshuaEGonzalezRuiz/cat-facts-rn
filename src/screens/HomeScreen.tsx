import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { Text } from "react-native-paper";
import { ScreenHeader } from "../components/ScreenHeader";
import { FactCard } from "../components/FactCard";
import { FeedbackSnackbar } from "../components/FeedbackSnackbar";
import { useHomeViewModel } from "../viewmodels/homeViewModel";
import { useGlobalSnackbar } from "../hooks/useGlobalSnackbar";

export const HomeScreen = () => {
  const { facts, favorites, loading, loadMore } = useHomeViewModel();

  const { snackbarVisible, snackbarText, snackbarVariant, setSnackbarVisible } =
    useGlobalSnackbar();

  const renderItem = ({ item }: any) => {
    const isFavorite = favorites.some((f) => f.fact === item.fact);
    return <FactCard fact={item} isFavorite={isFavorite} />;
  };

  if (loading && facts.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <LottieView
          source={require("../../assets/animations/cat-loading.json")}
          autoPlay
          loop
          style={styles.lottie}
        />
        <Text style={styles.loadingText}>
          The cats are pawing through the archives... hang tight! 🐾
        </Text>
      </View>
    );
  }

  return (
    <>
      <ScreenHeader title="Meow-velous Facts 😺" />
      {facts.length === 0 && !loading ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            The cats gave it their best shot...{"\n"}
            But they couldn’t complete the task this time 😿
          </Text>
          <LottieView
            source={require("../../assets/animations/no-facts-cat.json")}
            autoPlay
            loop
            style={styles.lottie}
          />
        </View>
      ) : (
        <FlatList
          data={facts}
          renderItem={renderItem}
          keyExtractor={(item) => item.fact}
          onEndReached={loadMore}
          contentContainerStyle={{ paddingBottom: 120 }}
          ListFooterComponent={
            loading ? (
              <View style={styles.footer}>
                <LottieView
                  source={require("../../assets/animations/loading-more-cat.json")}
                  autoPlay
                  loop
                  style={styles.footerLottie}
                />
              </View>
            ) : null
          }
        />
      )}

      <FeedbackSnackbar
        visible={snackbarVisible}
        message={snackbarText}
        onDismiss={() => setSnackbarVisible(false)}
        variant={snackbarVariant}
      />
    </>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: 250,
    height: 250,
  },
  emptyText: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
    color: "#888",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#999",
    fontStyle: "italic",
    textAlign: "center",
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footerLottie: {
    width: 100,
    height: 100,
  },
});
