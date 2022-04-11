import { Content, Layout } from "containers";
import { FileInput } from "components";
import { useJson } from "hooks";

const MainPage = () => {
  const { state: json } = useJson();
  return (
    <Layout>
      <FileInput />
      <Content json={json} />
    </Layout>
  );
};

export default MainPage;
