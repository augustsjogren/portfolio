
import styles from './skillTag.module.css';

const SkillTag = (props: { content: string }) => {
  return <div className={styles['skill-tag']}>{props.content}</div>;
};

export default SkillTag;
