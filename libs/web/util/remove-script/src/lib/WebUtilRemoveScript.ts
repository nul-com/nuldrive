export interface webUtilAddScriptProps {
  id: any;
}

export function webUtilRemoveScript(props: webUtilAddScriptProps): any {
  const { id } = props;

  const script = document.getElementById(id);

  if (script) {
    document.body.removeChild(script);
  }
}
