import { createWithRemoteLoader } from '@kne/remote-loader';
import { Outlet } from 'react-router-dom';

const MainLayout = createWithRemoteLoader({
  modules: ['components-core:Global', 'components-core:Layout']
})(({ remoteModules, paths, preset, ...props }) => {
  const [Global, Layout] = remoteModules;
  return (
    <Global {...props} preset={preset}>
      <Layout
        navigation={{
          defaultTitle: 'KneUnion',
          base: '/ued',
          list: paths,
          showIndex: false
        }}
      >
        <Outlet />
      </Layout>
    </Global>
  );
});

export default MainLayout;
