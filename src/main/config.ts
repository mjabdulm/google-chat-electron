import Store from 'electron-store';
import {Rectangle} from 'electron';

const isSnap = require('electron-is-snap').isSnap;

type StoreType = {
  window: {
    bounds: Rectangle,
    isMaximized: boolean
  },
  app: {
    autoCheckForUpdates: boolean,
    launchAtLogin: boolean,
    darkReader: boolean,
  }
}

const schema: Store.Schema<StoreType> = {
  window: {
    type: 'object',
    properties: {
      bounds: {
        type: 'object',
        properties: {
          x: {
            type: 'number'
          },
          y: {
            type: 'number'
          },
          width: {
            type: 'number'
          },
          height: {
            type: 'number'
          },
        },
        default: {
          x: null,
          y: null,
          width: 800,
          height: 600,
        }
      },
      isMaximized: {
        type: 'boolean',
        default: false
      }
    }
  },
  app: {
    type: 'object',
    properties: {
      autoCheckForUpdates: {
        type: 'boolean',
        default: !isSnap
      },
      autoLaunchAtLogin: {
        type: 'boolean',
        default: true
      },
      darkReader: {
        type: 'boolean',
        default: false
      }
    }
  }
}

export default new Store<StoreType>({
  schema,
  clearInvalidConfig: true
});
