/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import type { Context } from './context';
import type { core } from 'nexus';

declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * The `BigInt` scalar type represents non-fractional signed whole numeric values.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
     */
    bigInt<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>
    ): void; // "BigInt";
    /**
     * The `Byte` scalar type represents byte value as a Buffer
     */
    bytes<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>
    ): void; // "Bytes";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>
    ): void; // "DateTime";
    /**
     * An arbitrary-precision Decimal type
     */
    decimal<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>
    ): void; // "Decimal";
    /**
     * The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>
    ): void; // "Json";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * The `BigInt` scalar type represents non-fractional signed whole numeric values.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
     */
    bigInt<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "BigInt";
    /**
     * The `Byte` scalar type represents byte value as a Buffer
     */
    bytes<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "Bytes";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "DateTime";
    /**
     * An arbitrary-precision Decimal type
     */
    decimal<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "Decimal";
    /**
     * The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "Json";
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreateEventFromTemplateInput: {
    // input type
    end: NexusGenScalars['DateTime']; // DateTime!
    organizerId?: string | null; // ID
    organizerLimit: number; // Int!
    participantLimit: number; // Int!
    start: NexusGenScalars['DateTime']; // DateTime!
  };
  CreateEventTemplateInput: {
    // input type
    comment: string; // String!
    description: string; // String!
    duration: NexusGenScalars['Decimal']; // Decimal!
    icon: string; // String!
    location: string; // String!
    locationId: string; // String!
    organizerText: string; // String!
    participantMail: string; // String!
    participantText: string; // String!
    title: string; // String!
  };
  CreateUserInput: {
    // input type
    birthdate: NexusGenScalars['DateTime']; // DateTime!
    firstName: string; // String!
    lastName: string; // String!
  };
  NewOrganizerInput: {
    // input type
    link?: string | null; // String
    name: string; // String!
    text: string; // String!
  };
  UpdateTemplateInput: {
    // input type
    description: string; // String!
    icon: string; // String!
    location: string; // String!
    locationId: string; // String!
    organizerText: string; // String!
    title: string; // String!
  };
}

export interface NexusGenEnums {
  MembershipStatus: 'ALUMNI' | 'FULL' | 'NONE' | 'SPONSOR' | 'TRIAL';
  PublicationState: 'APPROVAL' | 'DRAFT' | 'PUBLIC';
  RegistrationType: 'ORGANIZER' | 'PARTICIPANT';
  Role: 'ADMIN' | 'USER';
  SubmissionItemType: 'DATE' | 'FILE' | 'NUMBER' | 'RATING' | 'TEXT';
  SubmissionTime: 'AFTER' | 'BEFORE' | 'DURING' | 'REGISTRATION';
}

export interface NexusGenScalars {
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  BigInt: any;
  Bytes: any;
  DateTime: any;
  Decimal: any;
  Json: any;
}

export interface NexusGenObjects {
  EventOrganizer: {
    // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    link?: string | null; // String
    name: string; // String!
    tenantId: string; // String!
    text: string; // String!
  };
  EventRegistration: {
    // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    eventId: string; // String!
    id: string; // ID!
    type: NexusGenEnums['RegistrationType']; // RegistrationType!
    userId: string; // String!
  };
  EventTemplate: {
    // root type
    comment: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    duration: NexusGenScalars['Decimal']; // Decimal!
    finances: NexusGenScalars['Json']; // Json!
    icon: string; // String!
    id: string; // ID!
    location: string; // String!
    locationId: string; // String!
    organizerText: string; // String!
    participantMail: string; // String!
    participantText: string; // String!
    title: string; // String!
  };
  Mutation: {};
  PhotoShare: {
    // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    eventId: string; // String!
    id: string; // ID!
  };
  Query: {};
  Tenant: {
    // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    name: string; // String!
    shortName: string; // String!
  };
  TumiEvent: {
    // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    end: NexusGenScalars['DateTime']; // DateTime!
    eventOrganizerId: string; // String!
    eventTemplateId: string; // String!
    icon: string; // String!
    id: string; // ID!
    location: string; // String!
    locationId: string; // String!
    organizerLimit: number; // Int!
    organizerSignup: NexusGenEnums['MembershipStatus'][]; // [MembershipStatus!]!
    organizerText: string; // String!
    participantLimit: number; // Int!
    participantMail: string; // String!
    participantSignup: NexusGenEnums['MembershipStatus'][]; // [MembershipStatus!]!
    participantText: string; // String!
    publicationState: NexusGenEnums['PublicationState']; // PublicationState!
    start: NexusGenScalars['DateTime']; // DateTime!
    title: string; // String!
  };
  User: {
    // root type
    authId: string; // String!
    birthdate: NexusGenScalars['DateTime']; // DateTime!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    firstName: string; // String!
    id: string; // ID!
    lastName: string; // String!
  };
  UsersOfTenants: {
    // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    role: NexusGenEnums['Role']; // Role!
    status: NexusGenEnums['MembershipStatus']; // MembershipStatus!
    tenantId: string; // String!
    userId: string; // String!
  };
}

export interface NexusGenInterfaces {}

export interface NexusGenUnions {}

export type NexusGenRootTypes = NexusGenObjects;

export type NexusGenAllTypes = NexusGenRootTypes &
  NexusGenScalars &
  NexusGenEnums;

export interface NexusGenFieldTypes {
  EventOrganizer: {
    // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    events: NexusGenRootTypes['TumiEvent'][]; // [TumiEvent!]!
    id: string; // ID!
    link: string | null; // String
    name: string; // String!
    tenant: NexusGenRootTypes['Tenant']; // Tenant!
    tenantId: string; // String!
    text: string; // String!
  };
  EventRegistration: {
    // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    event: NexusGenRootTypes['TumiEvent']; // TumiEvent!
    eventId: string; // String!
    id: string; // ID!
    type: NexusGenEnums['RegistrationType']; // RegistrationType!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  };
  EventTemplate: {
    // field return type
    comment: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    duration: NexusGenScalars['Decimal']; // Decimal!
    eventInstances: NexusGenRootTypes['TumiEvent'][]; // [TumiEvent!]!
    finances: NexusGenScalars['Json']; // Json!
    icon: string; // String!
    id: string; // ID!
    location: string; // String!
    locationId: string; // String!
    organizerText: string; // String!
    participantMail: string; // String!
    participantText: string; // String!
    tenant: NexusGenRootTypes['Tenant']; // Tenant!
    title: string; // String!
  };
  Mutation: {
    // field return type
    createEventFromTemplate: NexusGenRootTypes['TumiEvent'] | null; // TumiEvent
    createEventOrganizer: NexusGenRootTypes['EventOrganizer'] | null; // EventOrganizer
    createEventTemplate: NexusGenRootTypes['EventTemplate'] | null; // EventTemplate
    deleteTemplate: NexusGenRootTypes['EventTemplate'] | null; // EventTemplate
    registerForEvent: NexusGenRootTypes['TumiEvent'] | null; // TumiEvent
    registerUser: NexusGenRootTypes['User']; // User!
    updateTemplate: NexusGenRootTypes['EventTemplate'] | null; // EventTemplate
    updateUserRole: NexusGenRootTypes['User']; // User!
    updateUserStatus: NexusGenRootTypes['User']; // User!
  };
  PhotoShare: {
    // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    event: NexusGenRootTypes['TumiEvent']; // TumiEvent!
    eventId: string; // String!
    id: string; // ID!
  };
  Query: {
    // field return type
    currentTenant: NexusGenRootTypes['Tenant'] | null; // Tenant
    currentUser: NexusGenRootTypes['User'] | null; // User
    event: NexusGenRootTypes['TumiEvent'] | null; // TumiEvent
    eventTemplate: NexusGenRootTypes['EventTemplate'] | null; // EventTemplate
    eventTemplates: NexusGenRootTypes['EventTemplate'][]; // [EventTemplate!]!
    events: NexusGenRootTypes['TumiEvent'][]; // [TumiEvent!]!
    organizers: NexusGenRootTypes['EventOrganizer'][]; // [EventOrganizer!]!
    tenants: NexusGenRootTypes['Tenant'][]; // [Tenant!]!
    userById: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  };
  Tenant: {
    // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    name: string; // String!
    shortName: string; // String!
  };
  TumiEvent: {
    // field return type
    couldBeOrganizer: boolean | null; // Boolean
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    createdBy: NexusGenRootTypes['User']; // User!
    description: string; // String!
    end: NexusGenScalars['DateTime']; // DateTime!
    eventOrganizerId: string; // String!
    eventTemplate: NexusGenRootTypes['EventTemplate']; // EventTemplate!
    eventTemplateId: string; // String!
    icon: string; // String!
    id: string; // ID!
    location: string; // String!
    locationId: string; // String!
    organizer: NexusGenRootTypes['EventOrganizer']; // EventOrganizer!
    organizerLimit: number; // Int!
    organizerRegistrationPossible: boolean | null; // Boolean
    organizerSignup: NexusGenEnums['MembershipStatus'][]; // [MembershipStatus!]!
    organizerText: string; // String!
    organizers: NexusGenRootTypes['User'][]; // [User!]!
    organizersRegistered: number | null; // Int
    participantLimit: number; // Int!
    participantMail: string; // String!
    participantRegistrationPossible: boolean | null; // Boolean
    participantSignup: NexusGenEnums['MembershipStatus'][]; // [MembershipStatus!]!
    participantText: string; // String!
    participantsRegistered: number | null; // Int
    photoShare: NexusGenRootTypes['PhotoShare'] | null; // PhotoShare
    publicationState: NexusGenEnums['PublicationState']; // PublicationState!
    registrations: NexusGenRootTypes['EventRegistration'][]; // [EventRegistration!]!
    start: NexusGenScalars['DateTime']; // DateTime!
    title: string; // String!
  };
  User: {
    // field return type
    authId: string; // String!
    birthdate: NexusGenScalars['DateTime']; // DateTime!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    currentTenant: NexusGenRootTypes['UsersOfTenants'] | null; // UsersOfTenants
    firstName: string; // String!
    fullName: string; // String!
    id: string; // ID!
    lastName: string; // String!
  };
  UsersOfTenants: {
    // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    role: NexusGenEnums['Role']; // Role!
    status: NexusGenEnums['MembershipStatus']; // MembershipStatus!
    tenant: NexusGenRootTypes['Tenant']; // Tenant!
    tenantId: string; // String!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  };
}

export interface NexusGenFieldTypeNames {
  EventOrganizer: {
    // field return type name
    createdAt: 'DateTime';
    events: 'TumiEvent';
    id: 'ID';
    link: 'String';
    name: 'String';
    tenant: 'Tenant';
    tenantId: 'String';
    text: 'String';
  };
  EventRegistration: {
    // field return type name
    createdAt: 'DateTime';
    event: 'TumiEvent';
    eventId: 'String';
    id: 'ID';
    type: 'RegistrationType';
    user: 'User';
    userId: 'String';
  };
  EventTemplate: {
    // field return type name
    comment: 'String';
    createdAt: 'DateTime';
    description: 'String';
    duration: 'Decimal';
    eventInstances: 'TumiEvent';
    finances: 'Json';
    icon: 'String';
    id: 'ID';
    location: 'String';
    locationId: 'String';
    organizerText: 'String';
    participantMail: 'String';
    participantText: 'String';
    tenant: 'Tenant';
    title: 'String';
  };
  Mutation: {
    // field return type name
    createEventFromTemplate: 'TumiEvent';
    createEventOrganizer: 'EventOrganizer';
    createEventTemplate: 'EventTemplate';
    deleteTemplate: 'EventTemplate';
    registerForEvent: 'TumiEvent';
    registerUser: 'User';
    updateTemplate: 'EventTemplate';
    updateUserRole: 'User';
    updateUserStatus: 'User';
  };
  PhotoShare: {
    // field return type name
    createdAt: 'DateTime';
    event: 'TumiEvent';
    eventId: 'String';
    id: 'ID';
  };
  Query: {
    // field return type name
    currentTenant: 'Tenant';
    currentUser: 'User';
    event: 'TumiEvent';
    eventTemplate: 'EventTemplate';
    eventTemplates: 'EventTemplate';
    events: 'TumiEvent';
    organizers: 'EventOrganizer';
    tenants: 'Tenant';
    userById: 'User';
    users: 'User';
  };
  Tenant: {
    // field return type name
    createdAt: 'DateTime';
    id: 'ID';
    name: 'String';
    shortName: 'String';
  };
  TumiEvent: {
    // field return type name
    couldBeOrganizer: 'Boolean';
    createdAt: 'DateTime';
    createdBy: 'User';
    description: 'String';
    end: 'DateTime';
    eventOrganizerId: 'String';
    eventTemplate: 'EventTemplate';
    eventTemplateId: 'String';
    icon: 'String';
    id: 'ID';
    location: 'String';
    locationId: 'String';
    organizer: 'EventOrganizer';
    organizerLimit: 'Int';
    organizerRegistrationPossible: 'Boolean';
    organizerSignup: 'MembershipStatus';
    organizerText: 'String';
    organizers: 'User';
    organizersRegistered: 'Int';
    participantLimit: 'Int';
    participantMail: 'String';
    participantRegistrationPossible: 'Boolean';
    participantSignup: 'MembershipStatus';
    participantText: 'String';
    participantsRegistered: 'Int';
    photoShare: 'PhotoShare';
    publicationState: 'PublicationState';
    registrations: 'EventRegistration';
    start: 'DateTime';
    title: 'String';
  };
  User: {
    // field return type name
    authId: 'String';
    birthdate: 'DateTime';
    createdAt: 'DateTime';
    currentTenant: 'UsersOfTenants';
    firstName: 'String';
    fullName: 'String';
    id: 'ID';
    lastName: 'String';
  };
  UsersOfTenants: {
    // field return type name
    createdAt: 'DateTime';
    role: 'Role';
    status: 'MembershipStatus';
    tenant: 'Tenant';
    tenantId: 'String';
    user: 'User';
    userId: 'String';
  };
}

export interface NexusGenArgTypes {
  Mutation: {
    createEventFromTemplate: {
      // args
      createEventFromTemplateInput: NexusGenInputs['CreateEventFromTemplateInput']; // CreateEventFromTemplateInput!
      templateId: string; // ID!
    };
    createEventOrganizer: {
      // args
      newOrganizerInput: NexusGenInputs['NewOrganizerInput']; // NewOrganizerInput!
    };
    createEventTemplate: {
      // args
      eventTemplateInput: NexusGenInputs['CreateEventTemplateInput']; // CreateEventTemplateInput!
    };
    deleteTemplate: {
      // args
      id: string; // ID!
    };
    registerForEvent: {
      // args
      eventId: string; // ID!
      registrationType: NexusGenEnums['RegistrationType'] | null; // RegistrationType
    };
    registerUser: {
      // args
      userInput?: NexusGenInputs['CreateUserInput'] | null; // CreateUserInput
    };
    updateUserRole: {
      // args
      role: NexusGenEnums['Role']; // Role!
      userId: string; // ID!
    };
    updateUserStatus: {
      // args
      status: NexusGenEnums['MembershipStatus']; // MembershipStatus!
      userId: string; // ID!
    };
  };
  Query: {
    event: {
      // args
      eventId: string; // ID!
    };
    eventTemplate: {
      // args
      id: string; // ID!
    };
    userById: {
      // args
      id: string; // ID!
    };
  };
}

export interface NexusGenAbstractTypeMembers {}

export interface NexusGenTypeInterfaces {}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false;
    resolveType: true;
    __typename: false;
  };
};

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes:
    | NexusGenTypes['inputNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['scalarNames'];
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames'];
  allNamedTypes:
    | NexusGenTypes['allInputTypes']
    | NexusGenTypes['allOutputTypes'];
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginInputFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginSchemaConfig {}
  interface NexusGenPluginArgConfig {}
}
