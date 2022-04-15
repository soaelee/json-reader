import { Layout, NoResult } from 'containers';
import { Content, FileInput } from 'components';
import { useJson } from 'hooks';

const MainPage = () => {
  const { state: json } = useJson();
  return (
    <Layout>
      <FileInput />
      {Object.keys(json).length > 0 ? (
        <div className="content">
          <Content json={json} />
        </div>
      ) : (
        <NoResult />
      )}
    </Layout>
  );
};

export default MainPage;
