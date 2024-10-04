import React from 'react';
import { Earth, Leaf, Telescope } from 'lucide-react';
import { Button, Card, Collapsible, Hr, Image, Metric, Row } from 'tinywidgets';
import { home, logo, title } from './Home.css.ts';

export const Home = () => {
  return (
    <div className={home}>
      <h1 className={title}>
        <Image src='/favicon.svg' variant='logo' className={logo} />
        My New App
      </h1>
      <Hr />
      <Row variant='1|2'>
        <Card>
          <p>Here's a button:</p>
          <Button title='Click me' onClick={() => alert('Clicked!')} />
        </Card>
        <Card>
          <p>Here's a collapsible box:</p>
          <Collapsible title='Collapsible' id='homeCollapsible'>
            Reload the browser and I preserve state!
          </Collapsible>
        </Card>
      </Row>
      <Hr />
      <p>Here are some metrics:</p>
      <Row variant='1|1|1'>
        <Card>
          <Metric title='Life' number={8} icon={Leaf} />
        </Card>
        <Card>
          <Metric title='The Universe' number={11} icon={Telescope} />
        </Card>
        <Card>
          <Metric title='Everything' number={23} icon={Earth} />
        </Card>
      </Row>
      <Hr />
      <p>
        And so much more. Check out{' '}
        <a href='https://tinywidgets.org'>tinywidgets.org</a> for the full
        documentation.
      </p>
    </div>
  );
};
