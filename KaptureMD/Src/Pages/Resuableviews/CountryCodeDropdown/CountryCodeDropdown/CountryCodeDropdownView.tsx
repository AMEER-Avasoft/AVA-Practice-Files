import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import CountryCodeBO from "./CountryCodeDropdownProps";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { DropdownArrow } from "../../../../Assets/Images/DropdownArrow";
import styles from "./CountryCodeDropdownStyles";

import CountryCodeDropdownProps from "./CountryCodeDropdownProps";

const CountryCodeDropdownView = ({
  countryList,
  onSelectCountry,
  selectedCountry,
}: CountryCodeDropdownProps) => {
  return (
    <SelectDropdown
      defaultValue={countryList[0]}
      data={countryList}
      onSelect={onSelectCountry}
      statusBarTranslucent
      renderButton={() => {
        return (
          <View style={styles.dropdownButtonStyle}>
            {selectedCountry && (
              <>
                <View style={styles.flagSize}>
                  <SvgXml
                    xml={selectedCountry.flagAssetPath}
                    width={"100%"}
                    height={"100%"}
                  />
                </View>
                <SvgXml xml={DropdownArrow} style={{ marginLeft: 6 }} />
              </>
            )}
          </View>
        );
      }}
      renderItem={(item: CountryCodeBO, index, isSelected) => {
        return (
          <View
            style={[
              styles.dropdownItemStyle,
              {
                flexDirection: "row",
              },
              isSelected && { backgroundColor: "#ffff" },
            ]}
          >
            <View style={styles.flagSize}>
              <SvgXml xml={item.flagAssetPath} height={"100%"} width={"100%"} />
            </View>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
};

export default CountryCodeDropdownView;
