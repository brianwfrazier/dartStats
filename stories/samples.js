import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';



/*
-- Code examples --
import LanguagesStatic from '../components/samples/01_staticComponent';
import LanguagesEnbeddedVars from '../components/samples/02_embeddedVar';
import LanguagesWithProps from '../components/samples/03_props';
import FrameworksIteration from '../components/samples/04_iteration';
import ParentComposition from '../components/samples/05_1_composition';
*/

storiesOf('dartStats/Samples', module)
  .add('01 - Add Dart Player', 
  () => { 
}
  )
  .add('02 - Remove Dart Player', 
  () => { 
}
  )
  .add('03 - Edit Dart Player', 
     () => { 
     }
  )
  .add('04 - Dart Player Profiles', 
      () => {    
        let frameworks = [ 
           {name: 'Frazier Stats', url : 'http://mmdl.org/stats/player/1801/Brian+Frazier'}, 
        ] ;
        let type = 'JS client-side Web' ;
        return  <FrameworksIteration frams={frameworks} 
           type={type} /> ;
      }
    )
    .add('05 - Modify Player Profile', 
    () => { 
    }
    )
