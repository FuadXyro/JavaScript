import { useState, useEffect } from 'react';
import { useLoading } from '../context/LoadingContext';
import { motion } from 'framer-motion';
import {
  BellIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

interface SettingsState {
  appearance: {
    darkMode: boolean;
    fontSize: string;
    compactMode: boolean;
    animationsEnabled: boolean;
    customTheme: string;
  };
  notifications: {
    email: boolean;
    push: boolean;
    soundEnabled: boolean;
    desktopNotifications: boolean;
    marketingEmails: boolean;
  };
  security: {
    twoFactorAuth: boolean;
    loginAlerts: boolean;
    sessionTimeout: string;
    passwordAge: string;
    deviceHistory: boolean;
  };
  privacy: {
    profileVisibility: string;
    activityStatus: boolean;
    searchVisibility: boolean;
    dataSharing: boolean;
  };
}

export default function Settings() {
  const { setLoading } = useLoading();
  const [settings, setSettings] = useState<SettingsState>({
    appearance: {
      darkMode: true,
      fontSize: 'medium',
      compactMode: false,
      animationsEnabled: true,
      customTheme: 'default',
    },
    notifications: {
      email: true,
      push: true,
      soundEnabled: true,
      desktopNotifications: true,
      marketingEmails: false,
    },
    security: {
      twoFactorAuth: false,
      loginAlerts: true,
      sessionTimeout: '30m',
      passwordAge: '90d',
      deviceHistory: true,
    },
    privacy: {
      profileVisibility: 'public',
      activityStatus: true,
      searchVisibility: true,
      dataSharing: false,
    },
  });

  useEffect(() => {
    const initializePage = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
      } finally {
        setLoading(false);
      }
    };

    initializePage();
  }, [setLoading]);

  const updateSettings = (category: keyof SettingsState, setting: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value,
      },
    }));
  };

  const SettingCard = ({ title, description, icon: Icon, children }: {
    title: string;
    description: string;
    icon: any;
    children: React.ReactNode;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-500/10 rounded-xl">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          <p className="text-gray-400 text-sm mb-4">{description}</p>
          {children}
        </div>
      </div>
    </motion.div>
  );

  const ToggleSwitch = ({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }) => (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
        checked ? 'bg-blue-500' : 'bg-gray-700'
      }`}
    >
      <span
        className={`${
          checked ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
      />
    </button>
  );

  const Select = ({ value, onChange, options }: {
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
  }) => (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-gray-700/50 text-white rounded-xl px-4 py-2 w-full outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <p className="text-gray-400 mt-2">Manage your account preferences and settings</p>
        </motion.div>

        <div className="space-y-6">
          {/* Appearance Settings */}
          <SettingCard
            title="Appearance"
            description="Customize how NEXON AI looks on your device"
            icon={Cog6ToothIcon}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Dark Mode</p>
                  <p className="text-sm text-gray-500">Switch between light and dark themes</p>
                </div>
                <ToggleSwitch
                  checked={settings.appearance.darkMode}
                  onChange={(value) => updateSettings('appearance', 'darkMode', value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Font Size</p>
                  <p className="text-sm text-gray-500">Adjust the text size</p>
                </div>
                <Select
                  value={settings.appearance.fontSize}
                  onChange={(value) => updateSettings('appearance', 'fontSize', value)}
                  options={[
                    { value: 'small', label: 'Small' },
                    { value: 'medium', label: 'Medium' },
                    { value: 'large', label: 'Large' },
                  ]}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Animations</p>
                  <p className="text-sm text-gray-500">Enable or disable interface animations</p>
                </div>
                <ToggleSwitch
                  checked={settings.appearance.animationsEnabled}
                  onChange={(value) => updateSettings('appearance', 'animationsEnabled', value)}
                />
              </div>
            </div>
          </SettingCard>

          {/* Notifications Settings */}
          <SettingCard
            title="Notifications"
            description="Choose what notifications you want to receive"
            icon={BellIcon}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive updates via email</p>
                </div>
                <ToggleSwitch
                  checked={settings.notifications.email}
                  onChange={(value) => updateSettings('notifications', 'email', value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Push Notifications</p>
                  <p className="text-sm text-gray-500">Get notified in your browser</p>
                </div>
                <ToggleSwitch
                  checked={settings.notifications.push}
                  onChange={(value) => updateSettings('notifications', 'push', value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Sound Effects</p>
                  <p className="text-sm text-gray-500">Play sounds for notifications</p>
                </div>
                <ToggleSwitch
                  checked={settings.notifications.soundEnabled}
                  onChange={(value) => updateSettings('notifications', 'soundEnabled', value)}
                />
              </div>
            </div>
          </SettingCard>

          {/* Security Settings */}
          <SettingCard
            title="Security"
            description="Manage your account security preferences"
            icon={ArrowLeftOnRectangleIcon}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-500">Add an extra layer of security</p>
                </div>
                <ToggleSwitch
                  checked={settings.security.twoFactorAuth}
                  onChange={(value) => updateSettings('security', 'twoFactorAuth', value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Login Alerts</p>
                  <p className="text-sm text-gray-500">Get notified of new sign-ins</p>
                </div>
                <ToggleSwitch
                  checked={settings.security.loginAlerts}
                  onChange={(value) => updateSettings('security', 'loginAlerts', value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Session Timeout</p>
                  <p className="text-sm text-gray-500">Automatically log out after inactivity</p>
                </div>
                <Select
                  value={settings.security.sessionTimeout}
                  onChange={(value) => updateSettings('security', 'sessionTimeout', value)}
                  options={[
                    { value: '15m', label: '15 minutes' },
                    { value: '30m', label: '30 minutes' },
                    { value: '1h', label: '1 hour' },
                    { value: '4h', label: '4 hours' },
                  ]}
                />
              </div>
            </div>
          </SettingCard>

          {/* Privacy Settings */}
          <SettingCard
            title="Privacy"
            description="Control your privacy preferences"
            icon={UserIcon}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Profile Visibility</p>
                  <p className="text-sm text-gray-500">Choose who can see your profile</p>
                </div>
                <Select
                  value={settings.privacy.profileVisibility}
                  onChange={(value) => updateSettings('privacy', 'profileVisibility', value)}
                  options={[
                    { value: 'public', label: 'Public' },
                    { value: 'private', label: 'Private' },
                    { value: 'friends', label: 'Friends Only' },
                  ]}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Activity Status</p>
                  <p className="text-sm text-gray-500">Show when you're active</p>
                </div>
                <ToggleSwitch
                  checked={settings.privacy.activityStatus}
                  onChange={(value) => updateSettings('privacy', 'activityStatus', value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Data Sharing</p>
                  <p className="text-sm text-gray-500">Share usage data to improve our services</p>
                </div>
                <ToggleSwitch
                  checked={settings.privacy.dataSharing}
                  onChange={(value) => updateSettings('privacy', 'dataSharing', value)}
                />
              </div>
            </div>
          </SettingCard>
        </div>
      </div>
    </div>
  );
}
