interface IServiceCardData {
  icon: SVGComponent;
  title: LocalizedText;
  description: LocalizedText;
  list: LocalizedText[];
}

interface IServicesContent {
  title: LocalizedText;
  services: IServiceCardData[];
}
