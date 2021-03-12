// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import Permissions from './permissions';

export const RESOURCE_KEYS = {
    ABOUT: {
        EDITION_AND_LICENSE: 'about.edition_and_license',
    },
    REPORTING: {
        SITE_STATISTICS: 'reporting.site_statistics',
        TEAM_STATISTICS: 'reporting.team_statistics',
        SERVER_LOGS: 'reporting.server_logs',
    },
    USER_MANAGEMENT: {
        USERS: 'user_management.users',
        GROUPS: 'user_management.groups',
        TEAMS: 'user_management.teams',
        CHANNELS: 'user_management.channels',
        PERMISSIONS: 'user_management.permissions',
        SYSTEM_ROLES: 'user_management.system_roles',
    },
    INTEGRATIONS: {
        INTEGRATION_MANAGEMENT: 'integrations.integration_management',
        BOT_ACCOUNTS: 'integrations.bot_accounts',
        GIF: 'integrations.gif',
        CORS: 'integrations.cors',
    },
    COMPLIANCE: {
        DATA_RETENTION_POLICY: 'compliance.data_retention_policy',
        COMPLIANCE_EXPORT: 'compliance.compliance_export',
        COMPLIANCE_MONITORING: 'compliance.compliance_monitoring',
        CUSTOM_TERMS_OF_SERVICE: 'compliance.custom_terms_of_service',
    },
    EXPERIMENTAL: {
        FEATURES: 'experimental.features',
        FEATURE_FLAGS: 'experimental.feature_flags',
        BLEVE: 'experimental.bleve',
    },
};

export const ResourceToSysConsolePermissionsTable: Record<string, string[]> = {
    [RESOURCE_KEYS.ABOUT.EDITION_AND_LICENSE]: [Permissions.SYSCONSOLE_READ_ABOUT_EDITION_AND_LICENSE, Permissions.SYSCONSOLE_WRITE_ABOUT_EDITION_AND_LICENSE],
    billing: [Permissions.SYSCONSOLE_READ_BILLING, Permissions.SYSCONSOLE_WRITE_BILLING],
    [RESOURCE_KEYS.REPORTING.SITE_STATISTICS]: [Permissions.SYSCONSOLE_READ_REPORTING_SITE_STATISTICS, Permissions.SYSCONSOLE_WRITE_REPORTING_SITE_STATISTICS],
    [RESOURCE_KEYS.REPORTING.TEAM_STATISTICS]: [Permissions.SYSCONSOLE_READ_REPORTING_TEAM_STATISTICS, Permissions.SYSCONSOLE_WRITE_REPORTING_TEAM_STATISTICS],
    [RESOURCE_KEYS.REPORTING.SERVER_LOGS]: [Permissions.SYSCONSOLE_READ_REPORTING_SERVER_LOGS, Permissions.SYSCONSOLE_WRITE_REPORTING_SERVER_LOGS],
    [RESOURCE_KEYS.USER_MANAGEMENT.USERS]: [Permissions.SYSCONSOLE_READ_USERMANAGEMENT_USERS, Permissions.SYSCONSOLE_WRITE_USERMANAGEMENT_USERS],
    [RESOURCE_KEYS.USER_MANAGEMENT.GROUPS]: [Permissions.SYSCONSOLE_READ_USERMANAGEMENT_GROUPS, Permissions.SYSCONSOLE_WRITE_USERMANAGEMENT_GROUPS],
    [RESOURCE_KEYS.USER_MANAGEMENT.TEAMS]: [Permissions.SYSCONSOLE_READ_USERMANAGEMENT_TEAMS, Permissions.SYSCONSOLE_WRITE_USERMANAGEMENT_TEAMS],
    [RESOURCE_KEYS.USER_MANAGEMENT.CHANNELS]: [Permissions.SYSCONSOLE_READ_USERMANAGEMENT_CHANNELS, Permissions.SYSCONSOLE_WRITE_USERMANAGEMENT_CHANNELS],
    [RESOURCE_KEYS.USER_MANAGEMENT.PERMISSIONS]: [Permissions.SYSCONSOLE_READ_USERMANAGEMENT_PERMISSIONS, Permissions.SYSCONSOLE_WRITE_USERMANAGEMENT_PERMISSIONS],
    [RESOURCE_KEYS.USER_MANAGEMENT.SYSTEM_ROLES]: [Permissions.SYSCONSOLE_READ_USERMANAGEMENT_SYSTEM_ROLES, Permissions.SYSCONSOLE_WRITE_USERMANAGEMENT_SYSTEM_ROLES],
    environment: [Permissions.SYSCONSOLE_READ_ENVIRONMENT, Permissions.SYSCONSOLE_WRITE_ENVIRONMENT],
    site: [Permissions.SYSCONSOLE_READ_SITE, Permissions.SYSCONSOLE_WRITE_SITE],
    authentication: [Permissions.SYSCONSOLE_READ_AUTHENTICATION, Permissions.SYSCONSOLE_WRITE_AUTHENTICATION],
    plugins: [Permissions.SYSCONSOLE_READ_PLUGINS, Permissions.SYSCONSOLE_WRITE_PLUGINS],
    [RESOURCE_KEYS.INTEGRATIONS.INTEGRATION_MANAGEMENT]: [Permissions.SYSCONSOLE_READ_INTEGRATIONS_INTEGRATION_MANAGEMENT, Permissions.SYSCONSOLE_WRITE_INTEGRATIONS_INTEGRATION_MANAGEMENT],
    [RESOURCE_KEYS.INTEGRATIONS.BOT_ACCOUNTS]: [Permissions.SYSCONSOLE_READ_INTEGRATIONS_BOT_ACCOUNTS, Permissions.SYSCONSOLE_WRITE_INTEGRATIONS_BOT_ACCOUNTS],
    [RESOURCE_KEYS.INTEGRATIONS.GIF]: [Permissions.SYSCONSOLE_READ_INTEGRATIONS_GIF, Permissions.SYSCONSOLE_WRITE_INTEGRATIONS_GIF],
    [RESOURCE_KEYS.INTEGRATIONS.CORS]: [Permissions.SYSCONSOLE_READ_INTEGRATIONS_CORS, Permissions.SYSCONSOLE_WRITE_INTEGRATIONS_CORS],
    [RESOURCE_KEYS.COMPLIANCE.DATA_RETENTION_POLICY]: [Permissions.SYSCONSOLE_READ_COMPLIANCE_DATA_RETENTION_POLICY, Permissions.SYSCONSOLE_WRITE_COMPLIANCE_DATA_RETENTION_POLICY],
    [RESOURCE_KEYS.COMPLIANCE.COMPLIANCE_EXPORT]: [Permissions.SYSCONSOLE_READ_COMPLIANCE_COMPLIANCE_EXPORT, Permissions.SYSCONSOLE_WRITE_COMPLIANCE_COMPLIANCE_EXPORT],
    [RESOURCE_KEYS.COMPLIANCE.COMPLIANCE_MONITORING]: [Permissions.SYSCONSOLE_READ_COMPLIANCE_COMPLIANCE_MONITORING, Permissions.SYSCONSOLE_WRITE_COMPLIANCE_COMPLIANCE_MONITORING],
    [RESOURCE_KEYS.COMPLIANCE.CUSTOM_TERMS_OF_SERVICE]: [Permissions.SYSCONSOLE_READ_COMPLIANCE_CUSTOM_TERMS_OF_SERVICE, Permissions.SYSCONSOLE_WRITE_COMPLIANCE_CUSTOM_TERMS_OF_SERVICE],

    [RESOURCE_KEYS.EXPERIMENTAL.FEATURES]: [Permissions.SYSCONSOLE_READ_EXPERIMENTAL_FEATURES, Permissions.SYSCONSOLE_WRITE_EXPERIMENTAL_FEATURES],
    [RESOURCE_KEYS.EXPERIMENTAL.FEATURE_FLAGS]: [Permissions.SYSCONSOLE_READ_EXPERIMENTAL_FEATURE_FLAGS, Permissions.SYSCONSOLE_WRITE_EXPERIMENTAL_FEATURE_FLAGS],
    [RESOURCE_KEYS.EXPERIMENTAL.BLEVE]: [Permissions.SYSCONSOLE_READ_EXPERIMENTAL_BLEVE, Permissions.SYSCONSOLE_WRITE_EXPERIMENTAL_BLEVE],
};
