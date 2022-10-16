import { Component, OnInit } from '@angular/core';

export interface NavigationItem {
  label: string;
  url: string;
}

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  public navigationItems: NavigationItem[] = [
    {
      label: 'Top Games',
      url: 'home/top'
    },
    {
      label: 'New Games',
      url: 'home/new'
    },
    {
      label: 'Slots',
      url: 'home/slots'
    },
    {
      label: 'Jackpots',
      url: 'home/jackpots'
    },
    {
      label: 'Live',
      url: 'home/live'
    },
    {
      label: 'Blackjack',
      url: 'home/blackjack'
    },
    {
      label: 'Roulette',
      url: 'home/roulette'
    },
    {
      label: 'Table',
      url: 'home/classic'
    },
    {
      label: 'Poker',
      url: 'home/poker'
    },
    {
      label: 'Other',
      url: 'home/other'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
