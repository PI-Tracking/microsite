import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Process Made Simple',
    Svg: require('@site/static/icons/process.svg').default,
    description: (
      <>
        Tracking was developed to help solve crime investigations by detecting and tracking armed suspects.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/icons/focus.svg').default,
    description: (
      <>
        No need to watch thousands of hours of CCTV recordings in different cameras looking for suspects.
      </>
    ),
  },
  {
    title: 'Innovative and flexible',
    Svg: require('@site/static/icons/innovative.svg').default,
    description: (
      <>
        You can either upload video recordings from multiple cameras or connect to the live feed.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
