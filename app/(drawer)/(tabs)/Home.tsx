import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

interface GitHubUser {
  avatar_url?: string;
  public_repos?: number;
  created_at?: string;
}

const Home = () => {
  const params = useLocalSearchParams();
  const username = params.userName;
  const [githubData, setGithubData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) {
      setLoading(false);
      return;
    }

    const url = `https://api.github.com/users/${username}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setGithubData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setGithubData(null);
        setLoading(false);
      });
  }, [username]);

  // Loading state
  if (loading) {
    return <ActivityIndicator size={"large"} />;
  }

  // Check if data exists
  if (!githubData) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>User not found</Text>
      </View>
    );
  }

  // Format join date
  const joinDate = githubData.created_at
    ? new Date(githubData.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to GitHub Hub</Text>
        <Text style={styles.subtitle}>Your Profile Overview</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.card}>
        {githubData?.avatar_url ? (
          <Image
            source={{ uri: githubData?.avatar_url }}
            style={styles.avatar}
          />
        ) : (
          <View style={[styles.avatar, styles.placeholderAvatar]} />
        )}

        <Text style={styles.username}>{username || "Username"}</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Repos</Text>
            <Text style={styles.statValue}>
              {githubData?.public_repos || 0}
            </Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Joined</Text>
            <Text style={styles.statValue}>{joinDate}</Text>
          </View>
        </View>

        {/* Fun tagline */}
        <Text style={styles.tagline}>Keep coding, keep committing! 🚀</Text>
      </View>

      {/* Footer or additional space */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by GitHub API</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1117",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#58a6ff",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#8b949e",
  },
  card: {
    backgroundColor: "#161b22",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: "#58a6ff",
  },
  placeholderAvatar: {
    backgroundColor: "#30363d",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f0f6fc",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 16,
  },
  statItem: {
    alignItems: "center",
  },
  statLabel: {
    fontSize: 14,
    color: "#8b949e",
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#f0f6fc",
  },
  tagline: {
    fontSize: 14,
    color: "#58a6ff",
    fontStyle: "italic",
    textAlign: "center",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },
  footerText: {
    color: "#8b949e",
    fontSize: 12,
  },
});

export default Home;
