'use client';

import { Container, Grid, Text } from '@mantine/core';
import React, { Dispatch, SetStateAction } from 'react';
import * as icons from '@tabler/icons-react';
import styles from './navbar.module.css';
import { IMenu, menuIds } from './layout';

interface Props {
  menus: IMenu[];
  activeTab: (typeof menuIds)[number];
  setActiveTab: Dispatch<SetStateAction<(typeof menuIds)[number]>>;
}

export const Navbar = ({ menus, activeTab, setActiveTab }: Props) => {
  return (
    <div className={styles.navbar}>
      <Container>
        <Grid align="center">
          {menus?.map((menu, index) => {
            const Icon = icons[menu.icon];
            return (
              <Grid.Col span={3} key={index}>
                <div
                  className={`${styles['nav-link']} ${activeTab === menu.id ? styles.active : ''}`}
                  onClick={() => setActiveTab(menu.id)}
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
