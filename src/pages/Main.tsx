import { Layout } from "containers";
import { Content, FileInput } from "components";
import { useJson } from "hooks";

const MainPage = () => {
  const { state: json } = useJson();
  return (
    <Layout>
      <FileInput />
      <main>
        <Content json={json} />
      </main>
    </Layout>
  );
};

export default MainPage;
