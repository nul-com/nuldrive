export interface webUtilAddScriptProps {
  src: any;
  id: any;
  onLoad?: any;
}

export function webUtilAddScript(props: webUtilAddScriptProps): any {
  const { src, id, onLoad } = props;

  const existing = document.getElementById(id);

  if (existing) {
    return existing;
  } else {
    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    script.setAttribute('type', 'text/javascript');
    script.async = true;
    script.onload = () => {
      if (onLoad) {
        onLoad();
      }
    };

    document.body.appendChild(script);
    return script;
  }
}
