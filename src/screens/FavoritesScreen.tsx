import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper"; // Text component for showing empty state message
import { useFavoritesViewModel } from "../viewmodels/favoritesViewModel"; // Custom hook for favorites logic
import { ScreenHeader } from "../components/ScreenHeader"; // Header component with title
import { FactCard } from "../components/FactCard"; // Card component that displays a cat fact
import { FeedbackSnackbar } from "../components/FeedbackSnackbar"; // Snackbar component for showing messages
import LottieView from "lottie-react-native";
import { useGlobalSnackbar } from "../hooks/useGlobalSnackbar";

// Screen that displays the user's favorite cat facts
export const FavoritesScreen = () => {
  // Extract state and logic from the ViewModel
  const {
    favorites, // List of favorite facts
  } = useFavoritesViewModel();

  const { snackbarVisible, snackbarText, snackbarVariant, setSnackbarVisible } =
    useGlobalSnackbar();

  // Renders each favorite item using the FactCard component
  const renderItem = ({ item }: any) => (
    <FactCard
      fact={item} // The cat fact to display
      isFavorite={true} // Always true on this screen
    />
  );

  return (
    <>
      <ScreenHeader title="My Purr-fect Picks 😽" />
      <FlatList
        data={favorites} // Data source: favorites array
        renderItem={renderItem} // Function to render each item
        keyExtractor={(item) => item.fact} // Unique key for each item
        // Message shown when the favorites list is empty
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <LottieView
              source={require("../../assets/animations/no-favs-cat.json")}
              autoPlay
              loop
              style={styles.lottie}
            />
            <Text style={styles.emptyText}>
              No purr-favorites yet... {"\n"} Start scratching! 😺
            </Text>
          </View>
        }
        contentContainerStyle={
          favorites.length === 0 ? styles.emptyFlatListContainer : undefined
        }
      />
      <FeedbackSnackbar
        visible={snackbarVisible} // Controls visibility
        message={snackbarText} // Text message
        onDismiss={() => setSnackbarVisible(false)} // Dismiss handler
        variant={snackbarVariant}
      />
    </>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  emptyFlatListContainer: {
    flex: 1,
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
});
