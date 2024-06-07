import React, { PureComponent } from 'react';

import { CharacterContext } from './AppContext';

import './Character.css';

import male_elf_ranger from './image/Elfish/male-ranger.jpg';
import female_elf_ranger from './image/Elfish/female-ranger.jpg';
import male_elf_mage from './image/Elfish/male-mage.jpg';
import female_elf_mage from './image/Elfish/female-mage.jpg';
import male_elf_figther from './image/Elfish/male-figther.jpg';
import female_elf_figther from './image/Elfish/female-figther.jpg';

import male_human_ranger from './image/Human/male-ranger.jpg';
import female_human_ranger from './image/Human/female-ranger.jpg';
import male_human_mage from './image/Human/male-mage.jpg';
import female_human_mage from './image/Human/female-mage.jpg';
import male_human_figther from './image/Human/male-figther.jpg';
import female_human_figther from './image/Human/female-figther.jpg';

import male_dwarf_ranger from './image/Dwarf/male-ranger.jpg';
import female_dwarf_ranger from './image/Dwarf/female-ranger.jpg';
import male_dwarf_mage from './image/Dwarf/male-mage.jpg';
import female_dwarf_mage from './image/Dwarf/female-mage.jpg';
import male_dwarf_figther from './image/Dwarf/male-figther.jpg';
import female_dwarf_figther from './image/Dwarf/female-figther.jpg';

class Character extends PureComponent {
  static contextType = CharacterContext;

  render() {
    const { sex, race, profession } = this.context;
    let title;
    let img;

    if (sex === 'male') {
      if (race === 'elf') {
        if (profession === 'ranger') {
          title = 'Elven Ranger';
          img = male_elf_ranger;
        } else if (profession === 'mage') {
          title = 'Elven Mage';
          img = male_elf_mage;
        } else if (profession === 'fighter') {
          title = 'Elven Warrior';
          img = male_elf_figther;
        }
      } else if (race === 'human') {
        if (profession === 'ranger') {
          title = 'Human Ranger';
          img = male_human_ranger;
        } else if (profession === 'mage') {
          title = 'Human Mage';
          img = male_human_mage;
        } else if (profession === 'fighter') {
          title = 'Human Warrior';
          img = male_human_figther;
        }
      } else if (race === 'dwarf') {
        if (profession === 'ranger') {
          title = 'Dwarf Crossbowman';
          img = male_dwarf_ranger;
        } else if (profession === 'mage') {
          title = 'Dwarf Mage';
          img = male_dwarf_mage;
        } else if (profession === 'fighter') {
          title = 'Dwarf Warrior';
          img = male_dwarf_figther;
        }
      }
    } else if (sex === 'female') {
      if (race === 'elf') {
        if (profession === 'ranger') {
          title = 'Elven Ranger';
          img = female_elf_ranger;
        } else if (profession === 'mage') {
          console.log(title, img);
          title = 'Elven Mage';
          img = female_elf_mage;
        } else if (profession === 'fighter') {
          title = 'Elven Warrior';
          img = female_elf_figther;
        }
      } else if (race === 'human') {
        if (profession === 'ranger') {
          title = 'Human Ranger';
          img = female_human_ranger;
        } else if (profession === 'mage') {
          title = 'Human Mage';
          img = female_human_mage;
        } else if (profession === 'fighter') {
          title = 'Human Warrior';
          img = female_human_figther;
        }
      } else if (race === 'dwarf') {
        if (profession === 'ranger') {
          title = 'Dwarf Crossbowman';
          img = female_dwarf_ranger;
        } else if (profession === 'mage') {
          title = 'Dwarf Mage';
          img = female_dwarf_mage;
        } else if (profession === 'fighter') {
          title = 'Dwarf Warrior';
          img = female_dwarf_figther;
        }
      }
    }

    return (
      <div className="character-wrapper">
        <p>{title}</p>
        <img src={img} alt="your_hero"></img>
      </div>
    );
  }
}

export default Character;
