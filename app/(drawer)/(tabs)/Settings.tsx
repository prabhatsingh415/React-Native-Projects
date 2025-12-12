import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";

interface SimpleSettingRowProps {
  label: string;
  value?: string;
  isToggle?: boolean;
  onToggle?: (value: boolean) => void;
  toggleValue?: boolean;
}

const SimpleSettingRow: React.FC<SimpleSettingRowProps> = ({
  label,
  value,
  isToggle,
  onToggle,
  toggleValue,
}) => (
  <TouchableOpacity
    style={styles.rowItem}
    onPress={() => console.log(`Tapped: ${label}`)}
    disabled={isToggle}
  >
    <Text style={styles.label}>{label}</Text>
    {isToggle ? (
      <Switch
        trackColor={{ false: "#30363d", true: "#58a6ff" }}
        thumbColor={"#f0f6fc"}
        onValueChange={onToggle}
        value={toggleValue}
      />
    ) : (
      <Text style={styles.value}>{value || ""}</Text>
    )}
  </TouchableOpacity>
);

const SimpleSettingsScreen: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [autoUpdate, setAutoUpdate] = useState<boolean>(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>ACCOUNT</Text>
        <SimpleSettingRow label="Change Username" value="current_user_123" />
        <SimpleSettingRow label="Security Settings" />
        <SimpleSettingRow label="Export Data" />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>DISPLAY & SOUND</Text>
        <SimpleSettingRow
          label="Dark Theme"
          isToggle={true}
          toggleValue={darkMode}
          onToggle={setDarkMode}
        />
        <SimpleSettingRow label="Text Size" value="Medium" />
        <SimpleSettingRow label="Notification Sound" value="Default" />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>GENERAL</Text>
        <SimpleSettingRow
          label="Auto Update App"
          isToggle={true}
          toggleValue={autoUpdate}
          onToggle={setAutoUpdate}
        />
        <SimpleSettingRow label="Language" value="English" />
        <SimpleSettingRow label="Check for Updates" value="v1.5.0" />
      </View>

      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => console.log("Logged Out")}
        >
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1117",
  },
  sectionContainer: {
    backgroundColor: "#161b22",
    borderRadius: 8,
    marginHorizontal: 10,
    marginTop: 15,
    paddingHorizontal: 5,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8b949e",
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5,
    textTransform: "uppercase",
  },
  rowItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#30363d",
  },
  label: {
    fontSize: 16,
    color: "#f0f6fc",
  },
  value: {
    fontSize: 16,
    color: "#8b949e",
  },
  logoutContainer: {
    paddingHorizontal: 10,
    marginTop: 30,
    marginBottom: 40,
  },
  logoutButton: {
    backgroundColor: "#f85149",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutText: {
    color: "#f0f6fc",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SimpleSettingsScreen;
