type SVGComponent = React.FC<React.SVGProps<SVGSVGElement> & { alt?: string }>;

declare module '*.svg' {
  const ReactComponent: SVGComponent;
  export default ReactComponent;
}
