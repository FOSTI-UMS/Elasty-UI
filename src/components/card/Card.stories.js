import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './Card';

export const text = 'Hello Button';

storiesOf('Card', module).add('Plain', () => (
    <Card 
        body={<p className="text-gray-300 text-sm">FOSTI merupakan unit kegiatan mahasiswa Fakultas Komunikasi dan Informatika</p>}
        //footer={<p className="text-indigo-900">Selanjutnya</p>}
        color="primary"
        variant=""
        // cardStyle="bg-green-400 rounded-sm"
        footerStyle="bg-blue-300" 
    />
));
storiesOf('Card', module).add('Header', () => <Card text={text} />);
storiesOf('Card', module).add('Footer', () => <Card text={text} />);