import Template from 'react-loader-spinner';

import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.Loader}>
    <Template type="ThreeDots" color="#3f51b5" height={100} width={100} />
  </div>
);

export default Loader;