import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";

const Profile = () => {
  const params = useLocalSearchParams();
  let userName = params.userName;

  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!userName) {
      setError("No username provided!");
      setLoading(false);
      return;
    }

    const url = `https://api.github.com/users/${userName}`;
    console.log("🔍 Fetching Profile URL:", url);

    fetch(url)
      .then((response) => {
        console.log("📡 Profile Response status:", response.status);
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("✅ Profile Data fetched:", data.login);
        setGithubData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(
          err.message.includes("404")
            ? "User not found! Check username."
            : err.message
        );
        setGithubData(null);
        setLoading(false);
      });
  }, [userName]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading Profile...</Text>
      </View>
    );
  }

  if (error || !githubData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          {error || "Failed to load profile!"}
        </Text>
      </View>
    );
  }

  const {
    login,
    avatar_url,
    name,
    bio,
    public_repos,
    followers,
    following,
    created_at,
    location,
    company,
    email,
    blog,
    twitter_username,
    html_url,
  } = githubData;

  const joinDate = created_at
    ? new Date(created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown";

  const openLink = (url: string) => {
    if (url) Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header with Avatar and Name */}
      <View style={styles.header}>
        <Image source={{ uri: avatar_url }} style={styles.avatar} />
        <Text style={styles.name}>{name || login}</Text>
        <Text style={styles.username}>@{login}</Text>
        {bio ? <Text style={styles.bio}>{bio}</Text> : null}
        <Text style={styles.profileLink} onPress={() => openLink(html_url)}>
          View on GitHub →
        </Text>
      </View>

      {/* Stats Row */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{public_repos}</Text>
          <Text style={styles.statLabel}>Repositories</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      {/* Details Section */}
      <View style={styles.detailsSection}>
        <Text style={styles.sectionTitle}>Details</Text>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Joined</Text>
          <Text style={styles.detailValue}>{joinDate}</Text>
        </View>
        {location ? (
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Location</Text>
            <Text style={styles.detailValue}>{location}</Text>
          </View>
        ) : null}
        {company ? (
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Company</Text>
            <Text style={styles.detailValue}>{company}</Text>
          </View>
        ) : null}
        {email ? (
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Email</Text>
            <Text
              style={styles.detailValue}
              onPress={() => Linking.openURL(`mailto:${email}`)}
            >
              {email}
            </Text>
          </View>
        ) : null}
        {blog ? (
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Blog</Text>
            <Text style={styles.detailValue} onPress={() => openLink(blog)}>
              {blog}
            </Text>
          </View>
        ) : null}
        {twitter_username ? (
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Twitter</Text>
            <Text
              style={styles.detailValue}
              onPress={() =>
                openLink(`https://twitter.com/${twitter_username}`)
              }
            >
              @{twitter_username}
            </Text>
          </View>
        ) : null}
      </View>

      {/* Footer Tagline */}
      <View style={styles.footer}>
        <Text style={styles.tagline}>GitHub: Where the world codes! 🌐</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1117", // Dark GitHub theme
  },
  loadingText: {
    flex: 1,
    color: "#f0f6fc",
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  errorText: {
    flex: 1,
    color: "#f85149", // GitHub red for errors
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  header: {
    alignItems: "center",
    padding: 24,
    backgroundColor: "#161b22",
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#58a6ff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f0f6fc",
    marginTop: 12,
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    color: "#58a6ff",
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: "#8b949e",
    textAlign: "center",
    marginBottom: 12,
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  profileLink: {
    fontSize: 14,
    color: "#58a6ff",
    fontWeight: "600",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statCard: {
    alignItems: "center",
    backgroundColor: "#21262d",
    padding: 16,
    borderRadius: 8,
    minWidth: 80,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f0f6fc",
  },
  statLabel: {
    fontSize: 12,
    color: "#8b949e",
    marginTop: 4,
  },
  detailsSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f0f6fc",
    marginBottom: 12,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#30363d",
  },
  detailLabel: {
    fontSize: 14,
    color: "#8b949e",
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    color: "#f0f6fc",
    flex: 1,
    textAlign: "right",
  },
  footer: {
    alignItems: "center",
    padding: 20,
    opacity: 0.7,
  },
  tagline: {
    fontSize: 12,
    color: "#8b949e",
    fontStyle: "italic",
    textAlign: "center",
  },
});

export default Profile;
