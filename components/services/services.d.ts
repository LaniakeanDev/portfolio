interface IServiceCardData {
  icon: IconName;
  title: LocalizedText;
  description: LocalizedText;
  list: {
    en: string[];
    fr: string[];
  };
}

interface IServicesContent {
  title: LocalizedText;
  services: IServiceCardData[];
}
