'use client';

import { Container, Grid, Text } from '@mantine/core';
import React, { Dispatch, SetStateAction } from 'react';
import * as icons from '@tabler/icons-react';
import styles from './navbar.module.css';
import { IMenu, MenuIdType } from '@/app/page';

interface Props {
  menus: IMenu[];
  activePage: MenuIdType;
  setActivePage: Dispatch<SetStateAction<MenuIdType>>;
}

export const Navbar = ({ menus, activePage, setActivePage }: Props) => {
  return (
    <div className={styles.navbar}>
      <Container>
        <Grid align="center">
          {menus?.map((menu, index) => {
            const Icon = icons[menu.icon];
            return (
              <Grid.Col span={3} key={index}>
                <div
                  className={`${styles['nav-link']} ${activePage === menu.id ? styles.active : ''}`}
                  onClick={() => setActivePage(menu.id)}
                >
                  <Icon stroke={2} size={20} />
                  <Text mb={0}>{menu.label}</Text>
                </div>
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};
