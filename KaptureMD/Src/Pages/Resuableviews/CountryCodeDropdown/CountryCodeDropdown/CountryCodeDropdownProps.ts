export default interface CountryCodeBO {
  name: string;
  code: string;
  flagAssetPath: string;
}

export default interface CountryCodeDropdownProps {
  selectedCountry: CountryCodeBO;
  countryList: CountryCodeBO[];
  onSelectCountry: (value: CountryCodeBO) => void;
}
