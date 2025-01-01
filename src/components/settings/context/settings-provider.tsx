'use client';

import { useMemo, useCallback, useState } from 'react';
import { isEqual } from 'lodash';
import { SettingsValueProps } from '../type';
import { SettingsContext } from './settings-context';
import { useLocalStorage } from '../../../hooks/use-local-storage';
import { ThemeProps, useTheme } from '@nextui-org/use-theme';

// ----------------------------------------------------------------------

type SettingsProviderProps = {
    children: React.ReactNode;
    defaultSettings: SettingsValueProps;
};

export function SettingsProvider({ children, defaultSettings }: SettingsProviderProps) {
    const { setTheme, theme } = useTheme()

    const [openDrawer, setOpenDrawer] = useState(false);

    const [settings, setSettings] = useLocalStorage('settings', defaultSettings);

    const onUpdate = useCallback(
        (name: string, value: string | boolean) => {
            setSettings((prevState: SettingsValueProps) => ({
                ...prevState,
                [name]: value,
            }));
        },
        [setSettings]
    );

    //* Reset
    const onReset = useCallback(() => {
        setSettings(defaultSettings);
        setTheme(ThemeProps.SYSTEM)
    }, [defaultSettings, setSettings]);

    //* Drawer
    const onToggleDrawer = useCallback(() => {
        setOpenDrawer((prev) => !prev);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setOpenDrawer(false);
    }, []);

    const canReset = !isEqual(settings, defaultSettings);

    const memoizedValue = useMemo(
        () => ({
            ...settings,
            onUpdate,
            //* Reset
            canReset,
            onReset,
            //* Theme Mode
            theme,
            setTheme,
            //* Drawer
            open: openDrawer,
            onToggle: onToggleDrawer,
            onClose: onCloseDrawer,
        }),
        [
            onReset,
            onUpdate,
            settings,
            theme,
            setTheme,
            canReset,
            openDrawer,
            onCloseDrawer,
            onToggleDrawer,
        ]
    );

    return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}
