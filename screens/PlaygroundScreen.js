import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight,
  SafeAreaView,
  ScrollView,
} from "react-native";
import oSurveyResults from "./../dummy_data/survey-results.json";

function getTableFromData(aTableData, sTableType) {
  //generate Regular Rows of the table:
  let aTableRows = aTableData.map((oRow, index) => {
    return (
      <View style={styles.tableRow} key={index}>
        <View style={styles.tableCell}>
          <Text>{oRow.foodGroup}</Text>
        </View>
        <View style={[styles.tableCell, styles.tableDividerLeft]}>
          <Text>{oRow.userServing}</Text>
        </View>
        <View style={[styles.tableCell, styles.tableDividerLeft]}>
          <Text>{oRow.requiredServings}</Text>
        </View>
      </View>
    );
  });

  let sHeaderTypeClass = "increase"; //assuming increase table by default
  if (sTableType === "decrease") {
    sHeaderTypeClass = "decrease";
  } else if (sTableType === "good") {
    sHeaderTypeClass = "good";
  }

  return (
    <View>
      {/* Header Row */}
      <View style={styles.tableRow}>
        <View
          style={[
            styles.tableCell,
            styles.tableHeader,
            styles[sHeaderTypeClass],
          ]}
        >
          <Text>Food</Text>
        </View>
        <View
          style={[
            styles.tableCell,
            styles.tableHeader,
            styles.tableDividerLeft,
            styles[sHeaderTypeClass],
          ]}
        >
          <Text>Your Intake</Text>
        </View>
        <View
          style={[
            styles.tableCell,
            styles.tableHeader,
            styles.tableDividerLeft,
            styles[sHeaderTypeClass],
          ]}
        >
          <Text>Target Intake</Text>
        </View>
      </View>

      {/* Regular Rows */}
      {aTableRows}
    </View>
  );
}

export default function PlaygroundScreen() {
  let oIncreaseSection,
    oDecreaseSection,
    oGoodSection = null;

  let aIncreaseData =
    oSurveyResults.surveySummary.insufficientIntakeFoodGroups || [];
  let aDecreaseData =
    oSurveyResults.surveySummary.excessiveIntakeFoodGroups || [];
  let aGoodData = oSurveyResults.surveySummary.idealIntakeFoodGroups || [];

  //Show each section only if the data exists —

  if (aIncreaseData.length) {
    let oIncreaseTable = getTableFromData(aIncreaseData, "increase");

    oIncreaseSection = (
      <>
        <View
          style={{
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
            }}
          >
            Increase intake for:
          </Text>
        </View>

        {oIncreaseTable}
      </>
    );
  }

  if (aDecreaseData.length) {
    let oDecreaseTable = getTableFromData(aDecreaseData, "decrease");

    oDecreaseSection = (
      <>
        <View
          style={{
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
            }}
          >
            Decrease intake for:
          </Text>
        </View>

        {oDecreaseTable}
      </>
    );
  }

  if (aGoodData.length) {
    let oGoodTable = getTableFromData(aGoodData, "good");

    oGoodSection = (
      <>
        <View
          style={{
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
            }}
          >
            You are doing good with these:
          </Text>
        </View>

        {oGoodTable}
      </>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          // alignItems: "center",
          backgroundColor: "cyan",
        }}
      >
        {/* ----- Header ----- */}
        <View
          style={{
            height: 54,
            display: "flex",
            flexDirection: "row",
            // backgroundColor: "yellow",
          }}
        >
          <View
            style={{
              width: 72,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "orange",
            }}
          >
            <Text>&lt;</Text>
            <Text>Back</Text>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "yellow",
            }}
          >
            <Text>Title</Text>
          </View>

          <View
            style={{
              width: 72,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              backgroundColor: "orange",
            }}
          >
            <Text>Help</Text>
          </View>
        </View>

        {/* ----- BODY ----- */}

        {oIncreaseSection}

        {oDecreaseSection}

        {oGoodSection}

        <View
          style={{
            backgroundColor: "#00DDDD",
            borderRadius: 3,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 20,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "cyan",
              fontStyle: "italic",
            }}
          >
            PLAYGROUND SCREEN
          </Text>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  tableCell: {
    flex: 1,
    borderColor: "#666666",
    padding: 12,
    borderBottomWidth: 1,
  },
  tableHeader: {
    borderTopWidth: 1,
  },
  increase: {
    backgroundColor: "#DAE5B8",
  },
  decrease: {
    backgroundColor: "#FFDADA",
  },
  good: {
    backgroundColor: "#CDF0FF",
  },
  tableDividerLeft: {
    borderLeftWidth: 1,
  },
});
