import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "attendance.config" */
export type Attendance_Config = {
  __typename?: 'attendance_config';
  ID: Scalars['Int'];
  TimeDeduction: Scalars['numeric'];
};

/** aggregated selection of "attendance.config" */
export type Attendance_Config_Aggregate = {
  __typename?: 'attendance_config_aggregate';
  aggregate?: Maybe<Attendance_Config_Aggregate_Fields>;
  nodes: Array<Attendance_Config>;
};

/** aggregate fields of "attendance.config" */
export type Attendance_Config_Aggregate_Fields = {
  __typename?: 'attendance_config_aggregate_fields';
  avg?: Maybe<Attendance_Config_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Attendance_Config_Max_Fields>;
  min?: Maybe<Attendance_Config_Min_Fields>;
  stddev?: Maybe<Attendance_Config_Stddev_Fields>;
  stddev_pop?: Maybe<Attendance_Config_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Attendance_Config_Stddev_Samp_Fields>;
  sum?: Maybe<Attendance_Config_Sum_Fields>;
  var_pop?: Maybe<Attendance_Config_Var_Pop_Fields>;
  var_samp?: Maybe<Attendance_Config_Var_Samp_Fields>;
  variance?: Maybe<Attendance_Config_Variance_Fields>;
};


/** aggregate fields of "attendance.config" */
export type Attendance_Config_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Attendance_Config_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Attendance_Config_Avg_Fields = {
  __typename?: 'attendance_config_avg_fields';
  ID?: Maybe<Scalars['Float']>;
  TimeDeduction?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "attendance.config". All fields are combined with a logical 'AND'. */
export type Attendance_Config_Bool_Exp = {
  ID?: InputMaybe<Int_Comparison_Exp>;
  TimeDeduction?: InputMaybe<Numeric_Comparison_Exp>;
  _and?: InputMaybe<Array<Attendance_Config_Bool_Exp>>;
  _not?: InputMaybe<Attendance_Config_Bool_Exp>;
  _or?: InputMaybe<Array<Attendance_Config_Bool_Exp>>;
};

/** unique or primary key constraints on table "attendance.config" */
export enum Attendance_Config_Constraint {
  /** unique or primary key constraint */
  ConfigPkey = 'config_pkey'
}

/** input type for incrementing numeric columns in table "attendance.config" */
export type Attendance_Config_Inc_Input = {
  ID?: InputMaybe<Scalars['Int']>;
  TimeDeduction?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "attendance.config" */
export type Attendance_Config_Insert_Input = {
  ID?: InputMaybe<Scalars['Int']>;
  TimeDeduction?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Attendance_Config_Max_Fields = {
  __typename?: 'attendance_config_max_fields';
  ID?: Maybe<Scalars['Int']>;
  TimeDeduction?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Attendance_Config_Min_Fields = {
  __typename?: 'attendance_config_min_fields';
  ID?: Maybe<Scalars['Int']>;
  TimeDeduction?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "attendance.config" */
export type Attendance_Config_Mutation_Response = {
  __typename?: 'attendance_config_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Attendance_Config>;
};

/** on conflict condition type for table "attendance.config" */
export type Attendance_Config_On_Conflict = {
  constraint: Attendance_Config_Constraint;
  update_columns?: Array<Attendance_Config_Update_Column>;
  where?: InputMaybe<Attendance_Config_Bool_Exp>;
};

/** Ordering options when selecting data from "attendance.config". */
export type Attendance_Config_Order_By = {
  ID?: InputMaybe<Order_By>;
  TimeDeduction?: InputMaybe<Order_By>;
};

/** primary key columns input for table: attendance_config */
export type Attendance_Config_Pk_Columns_Input = {
  ID: Scalars['Int'];
};

/** select columns of table "attendance.config" */
export enum Attendance_Config_Select_Column {
  /** column name */
  Id = 'ID',
  /** column name */
  TimeDeduction = 'TimeDeduction'
}

/** input type for updating data in table "attendance.config" */
export type Attendance_Config_Set_Input = {
  ID?: InputMaybe<Scalars['Int']>;
  TimeDeduction?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Attendance_Config_Stddev_Fields = {
  __typename?: 'attendance_config_stddev_fields';
  ID?: Maybe<Scalars['Float']>;
  TimeDeduction?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Attendance_Config_Stddev_Pop_Fields = {
  __typename?: 'attendance_config_stddev_pop_fields';
  ID?: Maybe<Scalars['Float']>;
  TimeDeduction?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Attendance_Config_Stddev_Samp_Fields = {
  __typename?: 'attendance_config_stddev_samp_fields';
  ID?: Maybe<Scalars['Float']>;
  TimeDeduction?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Attendance_Config_Sum_Fields = {
  __typename?: 'attendance_config_sum_fields';
  ID?: Maybe<Scalars['Int']>;
  TimeDeduction?: Maybe<Scalars['numeric']>;
};

/** update columns of table "attendance.config" */
export enum Attendance_Config_Update_Column {
  /** column name */
  Id = 'ID',
  /** column name */
  TimeDeduction = 'TimeDeduction'
}

/** aggregate var_pop on columns */
export type Attendance_Config_Var_Pop_Fields = {
  __typename?: 'attendance_config_var_pop_fields';
  ID?: Maybe<Scalars['Float']>;
  TimeDeduction?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Attendance_Config_Var_Samp_Fields = {
  __typename?: 'attendance_config_var_samp_fields';
  ID?: Maybe<Scalars['Float']>;
  TimeDeduction?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Attendance_Config_Variance_Fields = {
  __typename?: 'attendance_config_variance_fields';
  ID?: Maybe<Scalars['Float']>;
  TimeDeduction?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "attendance.intervals" */
export type Attendance_Intervals = {
  __typename?: 'attendance_intervals';
  card: Scalars['String'];
  database?: Maybe<Scalars['String']>;
  ent?: Maybe<Scalars['timestamp']>;
  ext?: Maybe<Scalars['timestamp']>;
  id: Scalars['Int'];
  /** An object relationship */
  user: Attendance_Users;
};

/** aggregated selection of "attendance.intervals" */
export type Attendance_Intervals_Aggregate = {
  __typename?: 'attendance_intervals_aggregate';
  aggregate?: Maybe<Attendance_Intervals_Aggregate_Fields>;
  nodes: Array<Attendance_Intervals>;
};

/** aggregate fields of "attendance.intervals" */
export type Attendance_Intervals_Aggregate_Fields = {
  __typename?: 'attendance_intervals_aggregate_fields';
  avg?: Maybe<Attendance_Intervals_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Attendance_Intervals_Max_Fields>;
  min?: Maybe<Attendance_Intervals_Min_Fields>;
  stddev?: Maybe<Attendance_Intervals_Stddev_Fields>;
  stddev_pop?: Maybe<Attendance_Intervals_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Attendance_Intervals_Stddev_Samp_Fields>;
  sum?: Maybe<Attendance_Intervals_Sum_Fields>;
  var_pop?: Maybe<Attendance_Intervals_Var_Pop_Fields>;
  var_samp?: Maybe<Attendance_Intervals_Var_Samp_Fields>;
  variance?: Maybe<Attendance_Intervals_Variance_Fields>;
};


/** aggregate fields of "attendance.intervals" */
export type Attendance_Intervals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Attendance_Intervals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "attendance.intervals" */
export type Attendance_Intervals_Aggregate_Order_By = {
  avg?: InputMaybe<Attendance_Intervals_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Attendance_Intervals_Max_Order_By>;
  min?: InputMaybe<Attendance_Intervals_Min_Order_By>;
  stddev?: InputMaybe<Attendance_Intervals_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Attendance_Intervals_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Attendance_Intervals_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Attendance_Intervals_Sum_Order_By>;
  var_pop?: InputMaybe<Attendance_Intervals_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Attendance_Intervals_Var_Samp_Order_By>;
  variance?: InputMaybe<Attendance_Intervals_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "attendance.intervals" */
export type Attendance_Intervals_Arr_Rel_Insert_Input = {
  data: Array<Attendance_Intervals_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Attendance_Intervals_On_Conflict>;
};

/** aggregate avg on columns */
export type Attendance_Intervals_Avg_Fields = {
  __typename?: 'attendance_intervals_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "attendance.intervals" */
export type Attendance_Intervals_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "attendance.intervals". All fields are combined with a logical 'AND'. */
export type Attendance_Intervals_Bool_Exp = {
  _and?: InputMaybe<Array<Attendance_Intervals_Bool_Exp>>;
  _not?: InputMaybe<Attendance_Intervals_Bool_Exp>;
  _or?: InputMaybe<Array<Attendance_Intervals_Bool_Exp>>;
  card?: InputMaybe<String_Comparison_Exp>;
  database?: InputMaybe<String_Comparison_Exp>;
  ent?: InputMaybe<Timestamp_Comparison_Exp>;
  ext?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Attendance_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "attendance.intervals" */
export enum Attendance_Intervals_Constraint {
  /** unique or primary key constraint */
  IntervalsPkey = 'Intervals_pkey',
  /** unique or primary key constraint */
  IntervalsIdKey = 'intervals_id_key'
}

/** input type for incrementing numeric columns in table "attendance.intervals" */
export type Attendance_Intervals_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "attendance.intervals" */
export type Attendance_Intervals_Insert_Input = {
  card?: InputMaybe<Scalars['String']>;
  database?: InputMaybe<Scalars['String']>;
  ent?: InputMaybe<Scalars['timestamp']>;
  ext?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Attendance_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Attendance_Intervals_Max_Fields = {
  __typename?: 'attendance_intervals_max_fields';
  card?: Maybe<Scalars['String']>;
  database?: Maybe<Scalars['String']>;
  ent?: Maybe<Scalars['timestamp']>;
  ext?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "attendance.intervals" */
export type Attendance_Intervals_Max_Order_By = {
  card?: InputMaybe<Order_By>;
  database?: InputMaybe<Order_By>;
  ent?: InputMaybe<Order_By>;
  ext?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Attendance_Intervals_Min_Fields = {
  __typename?: 'attendance_intervals_min_fields';
  card?: Maybe<Scalars['String']>;
  database?: Maybe<Scalars['String']>;
  ent?: Maybe<Scalars['timestamp']>;
  ext?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "attendance.intervals" */
export type Attendance_Intervals_Min_Order_By = {
  card?: InputMaybe<Order_By>;
  database?: InputMaybe<Order_By>;
  ent?: InputMaybe<Order_By>;
  ext?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "attendance.intervals" */
export type Attendance_Intervals_Mutation_Response = {
  __typename?: 'attendance_intervals_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Attendance_Intervals>;
};

/** on conflict condition type for table "attendance.intervals" */
export type Attendance_Intervals_On_Conflict = {
  constraint: Attendance_Intervals_Constraint;
  update_columns?: Array<Attendance_Intervals_Update_Column>;
  where?: InputMaybe<Attendance_Intervals_Bool_Exp>;
};

/** Ordering options when selecting data from "attendance.intervals". */
export type Attendance_Intervals_Order_By = {
  card?: InputMaybe<Order_By>;
  database?: InputMaybe<Order_By>;
  ent?: InputMaybe<Order_By>;
  ext?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Attendance_Users_Order_By>;
};

/** primary key columns input for table: attendance_intervals */
export type Attendance_Intervals_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "attendance.intervals" */
export enum Attendance_Intervals_Select_Column {
  /** column name */
  Card = 'card',
  /** column name */
  Database = 'database',
  /** column name */
  Ent = 'ent',
  /** column name */
  Ext = 'ext',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "attendance.intervals" */
export type Attendance_Intervals_Set_Input = {
  card?: InputMaybe<Scalars['String']>;
  database?: InputMaybe<Scalars['String']>;
  ent?: InputMaybe<Scalars['timestamp']>;
  ext?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Attendance_Intervals_Stddev_Fields = {
  __typename?: 'attendance_intervals_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "attendance.intervals" */
export type Attendance_Intervals_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Attendance_Intervals_Stddev_Pop_Fields = {
  __typename?: 'attendance_intervals_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "attendance.intervals" */
export type Attendance_Intervals_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Attendance_Intervals_Stddev_Samp_Fields = {
  __typename?: 'attendance_intervals_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "attendance.intervals" */
export type Attendance_Intervals_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Attendance_Intervals_Sum_Fields = {
  __typename?: 'attendance_intervals_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "attendance.intervals" */
export type Attendance_Intervals_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "attendance.intervals" */
export enum Attendance_Intervals_Update_Column {
  /** column name */
  Card = 'card',
  /** column name */
  Database = 'database',
  /** column name */
  Ent = 'ent',
  /** column name */
  Ext = 'ext',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Attendance_Intervals_Var_Pop_Fields = {
  __typename?: 'attendance_intervals_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "attendance.intervals" */
export type Attendance_Intervals_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Attendance_Intervals_Var_Samp_Fields = {
  __typename?: 'attendance_intervals_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "attendance.intervals" */
export type Attendance_Intervals_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Attendance_Intervals_Variance_Fields = {
  __typename?: 'attendance_intervals_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "attendance.intervals" */
export type Attendance_Intervals_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "attendance.users" */
export type Attendance_Users = {
  __typename?: 'attendance_users';
  card?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An array relationship */
  intervals: Array<Attendance_Intervals>;
  /** An aggregate relationship */
  intervals_aggregate: Attendance_Intervals_Aggregate;
  lastname?: Maybe<Scalars['String']>;
};


/** columns and relationships of "attendance.users" */
export type Attendance_UsersIntervalsArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Intervals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Intervals_Order_By>>;
  where?: InputMaybe<Attendance_Intervals_Bool_Exp>;
};


/** columns and relationships of "attendance.users" */
export type Attendance_UsersIntervals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Intervals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Intervals_Order_By>>;
  where?: InputMaybe<Attendance_Intervals_Bool_Exp>;
};

/** aggregated selection of "attendance.users" */
export type Attendance_Users_Aggregate = {
  __typename?: 'attendance_users_aggregate';
  aggregate?: Maybe<Attendance_Users_Aggregate_Fields>;
  nodes: Array<Attendance_Users>;
};

/** aggregate fields of "attendance.users" */
export type Attendance_Users_Aggregate_Fields = {
  __typename?: 'attendance_users_aggregate_fields';
  avg?: Maybe<Attendance_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Attendance_Users_Max_Fields>;
  min?: Maybe<Attendance_Users_Min_Fields>;
  stddev?: Maybe<Attendance_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Attendance_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Attendance_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Attendance_Users_Sum_Fields>;
  var_pop?: Maybe<Attendance_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Attendance_Users_Var_Samp_Fields>;
  variance?: Maybe<Attendance_Users_Variance_Fields>;
};


/** aggregate fields of "attendance.users" */
export type Attendance_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Attendance_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Attendance_Users_Avg_Fields = {
  __typename?: 'attendance_users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "attendance.users". All fields are combined with a logical 'AND'. */
export type Attendance_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Attendance_Users_Bool_Exp>>;
  _not?: InputMaybe<Attendance_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Attendance_Users_Bool_Exp>>;
  card?: InputMaybe<String_Comparison_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  intervals?: InputMaybe<Attendance_Intervals_Bool_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "attendance.users" */
export enum Attendance_Users_Constraint {
  /** unique or primary key constraint */
  UsersCardKey = 'users_card_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "attendance.users" */
export type Attendance_Users_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "attendance.users" */
export type Attendance_Users_Insert_Input = {
  card?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  intervals?: InputMaybe<Attendance_Intervals_Arr_Rel_Insert_Input>;
  lastname?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Attendance_Users_Max_Fields = {
  __typename?: 'attendance_users_max_fields';
  card?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Attendance_Users_Min_Fields = {
  __typename?: 'attendance_users_min_fields';
  card?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "attendance.users" */
export type Attendance_Users_Mutation_Response = {
  __typename?: 'attendance_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Attendance_Users>;
};

/** input type for inserting object relation for remote table "attendance.users" */
export type Attendance_Users_Obj_Rel_Insert_Input = {
  data: Attendance_Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Attendance_Users_On_Conflict>;
};

/** on conflict condition type for table "attendance.users" */
export type Attendance_Users_On_Conflict = {
  constraint: Attendance_Users_Constraint;
  update_columns?: Array<Attendance_Users_Update_Column>;
  where?: InputMaybe<Attendance_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "attendance.users". */
export type Attendance_Users_Order_By = {
  card?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  intervals_aggregate?: InputMaybe<Attendance_Intervals_Aggregate_Order_By>;
  lastname?: InputMaybe<Order_By>;
};

/** primary key columns input for table: attendance_users */
export type Attendance_Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "attendance.users" */
export enum Attendance_Users_Select_Column {
  /** column name */
  Card = 'card',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  Lastname = 'lastname'
}

/** input type for updating data in table "attendance.users" */
export type Attendance_Users_Set_Input = {
  card?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastname?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Attendance_Users_Stddev_Fields = {
  __typename?: 'attendance_users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Attendance_Users_Stddev_Pop_Fields = {
  __typename?: 'attendance_users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Attendance_Users_Stddev_Samp_Fields = {
  __typename?: 'attendance_users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Attendance_Users_Sum_Fields = {
  __typename?: 'attendance_users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "attendance.users" */
export enum Attendance_Users_Update_Column {
  /** column name */
  Card = 'card',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  Lastname = 'lastname'
}

/** aggregate var_pop on columns */
export type Attendance_Users_Var_Pop_Fields = {
  __typename?: 'attendance_users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Attendance_Users_Var_Samp_Fields = {
  __typename?: 'attendance_users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Attendance_Users_Variance_Fields = {
  __typename?: 'attendance_users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "auto_poster_bot.advertising_chat" */
export type Auto_Poster_Bot_Advertising_Chat = {
  __typename?: 'auto_poster_bot_advertising_chat';
  id: Scalars['bigint'];
  name: Scalars['String'];
  per_day_price: Scalars['Int'];
  target_audience: Scalars['String'];
};

/** aggregated selection of "auto_poster_bot.advertising_chat" */
export type Auto_Poster_Bot_Advertising_Chat_Aggregate = {
  __typename?: 'auto_poster_bot_advertising_chat_aggregate';
  aggregate?: Maybe<Auto_Poster_Bot_Advertising_Chat_Aggregate_Fields>;
  nodes: Array<Auto_Poster_Bot_Advertising_Chat>;
};

/** aggregate fields of "auto_poster_bot.advertising_chat" */
export type Auto_Poster_Bot_Advertising_Chat_Aggregate_Fields = {
  __typename?: 'auto_poster_bot_advertising_chat_aggregate_fields';
  avg?: Maybe<Auto_Poster_Bot_Advertising_Chat_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auto_Poster_Bot_Advertising_Chat_Max_Fields>;
  min?: Maybe<Auto_Poster_Bot_Advertising_Chat_Min_Fields>;
  stddev?: Maybe<Auto_Poster_Bot_Advertising_Chat_Stddev_Fields>;
  stddev_pop?: Maybe<Auto_Poster_Bot_Advertising_Chat_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auto_Poster_Bot_Advertising_Chat_Stddev_Samp_Fields>;
  sum?: Maybe<Auto_Poster_Bot_Advertising_Chat_Sum_Fields>;
  var_pop?: Maybe<Auto_Poster_Bot_Advertising_Chat_Var_Pop_Fields>;
  var_samp?: Maybe<Auto_Poster_Bot_Advertising_Chat_Var_Samp_Fields>;
  variance?: Maybe<Auto_Poster_Bot_Advertising_Chat_Variance_Fields>;
};


/** aggregate fields of "auto_poster_bot.advertising_chat" */
export type Auto_Poster_Bot_Advertising_Chat_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auto_Poster_Bot_Advertising_Chat_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Auto_Poster_Bot_Advertising_Chat_Avg_Fields = {
  __typename?: 'auto_poster_bot_advertising_chat_avg_fields';
  id?: Maybe<Scalars['Float']>;
  per_day_price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "auto_poster_bot.advertising_chat". All fields are combined with a logical 'AND'. */
export type Auto_Poster_Bot_Advertising_Chat_Bool_Exp = {
  _and?: InputMaybe<Array<Auto_Poster_Bot_Advertising_Chat_Bool_Exp>>;
  _not?: InputMaybe<Auto_Poster_Bot_Advertising_Chat_Bool_Exp>;
  _or?: InputMaybe<Array<Auto_Poster_Bot_Advertising_Chat_Bool_Exp>>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  per_day_price?: InputMaybe<Int_Comparison_Exp>;
  target_audience?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auto_poster_bot.advertising_chat" */
export enum Auto_Poster_Bot_Advertising_Chat_Constraint {
  /** unique or primary key constraint */
  AdvertisingChatChatIdKey = 'advertising_chat_chat_id_key',
  /** unique or primary key constraint */
  AdvertisingChatPkey = 'advertising_chat_pkey'
}

/** input type for incrementing numeric columns in table "auto_poster_bot.advertising_chat" */
export type Auto_Poster_Bot_Advertising_Chat_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  per_day_price?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "auto_poster_bot.advertising_chat" */
export type Auto_Poster_Bot_Advertising_Chat_Insert_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  per_day_price?: InputMaybe<Scalars['Int']>;
  target_audience?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auto_Poster_Bot_Advertising_Chat_Max_Fields = {
  __typename?: 'auto_poster_bot_advertising_chat_max_fields';
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  per_day_price?: Maybe<Scalars['Int']>;
  target_audience?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auto_Poster_Bot_Advertising_Chat_Min_Fields = {
  __typename?: 'auto_poster_bot_advertising_chat_min_fields';
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  per_day_price?: Maybe<Scalars['Int']>;
  target_audience?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auto_poster_bot.advertising_chat" */
export type Auto_Poster_Bot_Advertising_Chat_Mutation_Response = {
  __typename?: 'auto_poster_bot_advertising_chat_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auto_Poster_Bot_Advertising_Chat>;
};

/** input type for inserting object relation for remote table "auto_poster_bot.advertising_chat" */
export type Auto_Poster_Bot_Advertising_Chat_Obj_Rel_Insert_Input = {
  data: Auto_Poster_Bot_Advertising_Chat_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Auto_Poster_Bot_Advertising_Chat_On_Conflict>;
};

/** on conflict condition type for table "auto_poster_bot.advertising_chat" */
export type Auto_Poster_Bot_Advertising_Chat_On_Conflict = {
  constraint: Auto_Poster_Bot_Advertising_Chat_Constraint;
  update_columns?: Array<Auto_Poster_Bot_Advertising_Chat_Update_Column>;
  where?: InputMaybe<Auto_Poster_Bot_Advertising_Chat_Bool_Exp>;
};

/** Ordering options when selecting data from "auto_poster_bot.advertising_chat". */
export type Auto_Poster_Bot_Advertising_Chat_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  per_day_price?: InputMaybe<Order_By>;
  target_audience?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auto_poster_bot_advertising_chat */
export type Auto_Poster_Bot_Advertising_Chat_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "auto_poster_bot.advertising_chat" */
export enum Auto_Poster_Bot_Advertising_Chat_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PerDayPrice = 'per_day_price',
  /** column name */
  TargetAudience = 'target_audience'
}

/** input type for updating data in table "auto_poster_bot.advertising_chat" */
export type Auto_Poster_Bot_Advertising_Chat_Set_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  per_day_price?: InputMaybe<Scalars['Int']>;
  target_audience?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Auto_Poster_Bot_Advertising_Chat_Stddev_Fields = {
  __typename?: 'auto_poster_bot_advertising_chat_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  per_day_price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Auto_Poster_Bot_Advertising_Chat_Stddev_Pop_Fields = {
  __typename?: 'auto_poster_bot_advertising_chat_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  per_day_price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Auto_Poster_Bot_Advertising_Chat_Stddev_Samp_Fields = {
  __typename?: 'auto_poster_bot_advertising_chat_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  per_day_price?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Auto_Poster_Bot_Advertising_Chat_Sum_Fields = {
  __typename?: 'auto_poster_bot_advertising_chat_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  per_day_price?: Maybe<Scalars['Int']>;
};

/** update columns of table "auto_poster_bot.advertising_chat" */
export enum Auto_Poster_Bot_Advertising_Chat_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PerDayPrice = 'per_day_price',
  /** column name */
  TargetAudience = 'target_audience'
}

/** aggregate var_pop on columns */
export type Auto_Poster_Bot_Advertising_Chat_Var_Pop_Fields = {
  __typename?: 'auto_poster_bot_advertising_chat_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  per_day_price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Auto_Poster_Bot_Advertising_Chat_Var_Samp_Fields = {
  __typename?: 'auto_poster_bot_advertising_chat_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  per_day_price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Auto_Poster_Bot_Advertising_Chat_Variance_Fields = {
  __typename?: 'auto_poster_bot_advertising_chat_variance_fields';
  id?: Maybe<Scalars['Float']>;
  per_day_price?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "auto_poster_bot.payment" */
export type Auto_Poster_Bot_Payment = {
  __typename?: 'auto_poster_bot_payment';
  amount: Scalars['numeric'];
  client_id: Scalars['Int'];
  date: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  post?: Maybe<Auto_Poster_Bot_Post>;
  post_id?: Maybe<Scalars['Int']>;
  status: Scalars['Int'];
};

/** aggregated selection of "auto_poster_bot.payment" */
export type Auto_Poster_Bot_Payment_Aggregate = {
  __typename?: 'auto_poster_bot_payment_aggregate';
  aggregate?: Maybe<Auto_Poster_Bot_Payment_Aggregate_Fields>;
  nodes: Array<Auto_Poster_Bot_Payment>;
};

/** aggregate fields of "auto_poster_bot.payment" */
export type Auto_Poster_Bot_Payment_Aggregate_Fields = {
  __typename?: 'auto_poster_bot_payment_aggregate_fields';
  avg?: Maybe<Auto_Poster_Bot_Payment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auto_Poster_Bot_Payment_Max_Fields>;
  min?: Maybe<Auto_Poster_Bot_Payment_Min_Fields>;
  stddev?: Maybe<Auto_Poster_Bot_Payment_Stddev_Fields>;
  stddev_pop?: Maybe<Auto_Poster_Bot_Payment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auto_Poster_Bot_Payment_Stddev_Samp_Fields>;
  sum?: Maybe<Auto_Poster_Bot_Payment_Sum_Fields>;
  var_pop?: Maybe<Auto_Poster_Bot_Payment_Var_Pop_Fields>;
  var_samp?: Maybe<Auto_Poster_Bot_Payment_Var_Samp_Fields>;
  variance?: Maybe<Auto_Poster_Bot_Payment_Variance_Fields>;
};


/** aggregate fields of "auto_poster_bot.payment" */
export type Auto_Poster_Bot_Payment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auto_Poster_Bot_Payment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Auto_Poster_Bot_Payment_Avg_Fields = {
  __typename?: 'auto_poster_bot_payment_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  client_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "auto_poster_bot.payment". All fields are combined with a logical 'AND'. */
export type Auto_Poster_Bot_Payment_Bool_Exp = {
  _and?: InputMaybe<Array<Auto_Poster_Bot_Payment_Bool_Exp>>;
  _not?: InputMaybe<Auto_Poster_Bot_Payment_Bool_Exp>;
  _or?: InputMaybe<Array<Auto_Poster_Bot_Payment_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  client_id?: InputMaybe<Int_Comparison_Exp>;
  date?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  post?: InputMaybe<Auto_Poster_Bot_Post_Bool_Exp>;
  post_id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "auto_poster_bot.payment" */
export enum Auto_Poster_Bot_Payment_Constraint {
  /** unique or primary key constraint */
  PaymentIdKey = 'payment_id_key',
  /** unique or primary key constraint */
  PaymentPkey = 'payment_pkey',
  /** unique or primary key constraint */
  PaymentsPostIdKey = 'payments_post_id_key'
}

/** input type for incrementing numeric columns in table "auto_poster_bot.payment" */
export type Auto_Poster_Bot_Payment_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  client_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  post_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "auto_poster_bot.payment" */
export type Auto_Poster_Bot_Payment_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  client_id?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  post?: InputMaybe<Auto_Poster_Bot_Post_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Auto_Poster_Bot_Payment_Max_Fields = {
  __typename?: 'auto_poster_bot_payment_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  client_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Auto_Poster_Bot_Payment_Min_Fields = {
  __typename?: 'auto_poster_bot_payment_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  client_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "auto_poster_bot.payment" */
export type Auto_Poster_Bot_Payment_Mutation_Response = {
  __typename?: 'auto_poster_bot_payment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auto_Poster_Bot_Payment>;
};

/** input type for inserting object relation for remote table "auto_poster_bot.payment" */
export type Auto_Poster_Bot_Payment_Obj_Rel_Insert_Input = {
  data: Auto_Poster_Bot_Payment_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Auto_Poster_Bot_Payment_On_Conflict>;
};

/** on conflict condition type for table "auto_poster_bot.payment" */
export type Auto_Poster_Bot_Payment_On_Conflict = {
  constraint: Auto_Poster_Bot_Payment_Constraint;
  update_columns?: Array<Auto_Poster_Bot_Payment_Update_Column>;
  where?: InputMaybe<Auto_Poster_Bot_Payment_Bool_Exp>;
};

/** Ordering options when selecting data from "auto_poster_bot.payment". */
export type Auto_Poster_Bot_Payment_Order_By = {
  amount?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post?: InputMaybe<Auto_Poster_Bot_Post_Order_By>;
  post_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auto_poster_bot_payment */
export type Auto_Poster_Bot_Payment_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "auto_poster_bot.payment" */
export enum Auto_Poster_Bot_Payment_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "auto_poster_bot.payment" */
export type Auto_Poster_Bot_Payment_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  client_id?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  post_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Auto_Poster_Bot_Payment_Stddev_Fields = {
  __typename?: 'auto_poster_bot_payment_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  client_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Auto_Poster_Bot_Payment_Stddev_Pop_Fields = {
  __typename?: 'auto_poster_bot_payment_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  client_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Auto_Poster_Bot_Payment_Stddev_Samp_Fields = {
  __typename?: 'auto_poster_bot_payment_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  client_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Auto_Poster_Bot_Payment_Sum_Fields = {
  __typename?: 'auto_poster_bot_payment_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  client_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

/** update columns of table "auto_poster_bot.payment" */
export enum Auto_Poster_Bot_Payment_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Status = 'status'
}

/** aggregate var_pop on columns */
export type Auto_Poster_Bot_Payment_Var_Pop_Fields = {
  __typename?: 'auto_poster_bot_payment_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  client_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Auto_Poster_Bot_Payment_Var_Samp_Fields = {
  __typename?: 'auto_poster_bot_payment_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  client_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Auto_Poster_Bot_Payment_Variance_Fields = {
  __typename?: 'auto_poster_bot_payment_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  client_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post = {
  __typename?: 'auto_poster_bot_post';
  advertising_chat_id: Scalars['bigint'];
  advertising_days: Scalars['Int'];
  /** An object relationship */
  chat?: Maybe<Auto_Poster_Bot_Advertising_Chat>;
  client_id: Scalars['bigint'];
  id: Scalars['Int'];
  insert_date: Scalars['timestamptz'];
  keyboard?: Maybe<Scalars['String']>;
  passed_moderation: Scalars['Boolean'];
  /** An object relationship */
  payment?: Maybe<Auto_Poster_Bot_Payment>;
  payment_id?: Maybe<Scalars['Int']>;
  payment_status: Scalars['Int'];
  photo?: Maybe<Scalars['String']>;
  price: Scalars['bigint'];
  publication_end_date?: Maybe<Scalars['timestamptz']>;
  publication_hour: Scalars['Int'];
  publication_start_date?: Maybe<Scalars['timestamptz']>;
  text: Scalars['String'];
  /** An object relationship */
  user?: Maybe<Auto_Poster_Bot_User>;
};

/** aggregated selection of "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Aggregate = {
  __typename?: 'auto_poster_bot_post_aggregate';
  aggregate?: Maybe<Auto_Poster_Bot_Post_Aggregate_Fields>;
  nodes: Array<Auto_Poster_Bot_Post>;
};

/** aggregate fields of "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Aggregate_Fields = {
  __typename?: 'auto_poster_bot_post_aggregate_fields';
  avg?: Maybe<Auto_Poster_Bot_Post_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auto_Poster_Bot_Post_Max_Fields>;
  min?: Maybe<Auto_Poster_Bot_Post_Min_Fields>;
  stddev?: Maybe<Auto_Poster_Bot_Post_Stddev_Fields>;
  stddev_pop?: Maybe<Auto_Poster_Bot_Post_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auto_Poster_Bot_Post_Stddev_Samp_Fields>;
  sum?: Maybe<Auto_Poster_Bot_Post_Sum_Fields>;
  var_pop?: Maybe<Auto_Poster_Bot_Post_Var_Pop_Fields>;
  var_samp?: Maybe<Auto_Poster_Bot_Post_Var_Samp_Fields>;
  variance?: Maybe<Auto_Poster_Bot_Post_Variance_Fields>;
};


/** aggregate fields of "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auto_Poster_Bot_Post_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Aggregate_Order_By = {
  avg?: InputMaybe<Auto_Poster_Bot_Post_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auto_Poster_Bot_Post_Max_Order_By>;
  min?: InputMaybe<Auto_Poster_Bot_Post_Min_Order_By>;
  stddev?: InputMaybe<Auto_Poster_Bot_Post_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Auto_Poster_Bot_Post_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Auto_Poster_Bot_Post_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Auto_Poster_Bot_Post_Sum_Order_By>;
  var_pop?: InputMaybe<Auto_Poster_Bot_Post_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Auto_Poster_Bot_Post_Var_Samp_Order_By>;
  variance?: InputMaybe<Auto_Poster_Bot_Post_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Arr_Rel_Insert_Input = {
  data: Array<Auto_Poster_Bot_Post_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Auto_Poster_Bot_Post_On_Conflict>;
};

/** aggregate avg on columns */
export type Auto_Poster_Bot_Post_Avg_Fields = {
  __typename?: 'auto_poster_bot_post_avg_fields';
  advertising_chat_id?: Maybe<Scalars['Float']>;
  advertising_days?: Maybe<Scalars['Float']>;
  client_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  payment_status?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  publication_hour?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Avg_Order_By = {
  advertising_chat_id?: InputMaybe<Order_By>;
  advertising_days?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  publication_hour?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auto_poster_bot.post". All fields are combined with a logical 'AND'. */
export type Auto_Poster_Bot_Post_Bool_Exp = {
  _and?: InputMaybe<Array<Auto_Poster_Bot_Post_Bool_Exp>>;
  _not?: InputMaybe<Auto_Poster_Bot_Post_Bool_Exp>;
  _or?: InputMaybe<Array<Auto_Poster_Bot_Post_Bool_Exp>>;
  advertising_chat_id?: InputMaybe<Bigint_Comparison_Exp>;
  advertising_days?: InputMaybe<Int_Comparison_Exp>;
  chat?: InputMaybe<Auto_Poster_Bot_Advertising_Chat_Bool_Exp>;
  client_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  insert_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  keyboard?: InputMaybe<String_Comparison_Exp>;
  passed_moderation?: InputMaybe<Boolean_Comparison_Exp>;
  payment?: InputMaybe<Auto_Poster_Bot_Payment_Bool_Exp>;
  payment_id?: InputMaybe<Int_Comparison_Exp>;
  payment_status?: InputMaybe<Int_Comparison_Exp>;
  photo?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Bigint_Comparison_Exp>;
  publication_end_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  publication_hour?: InputMaybe<Int_Comparison_Exp>;
  publication_start_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Auto_Poster_Bot_User_Bool_Exp>;
};

/** unique or primary key constraints on table "auto_poster_bot.post" */
export enum Auto_Poster_Bot_Post_Constraint {
  /** unique or primary key constraint */
  AdvertisingPostPkey = 'advertising_post_pkey'
}

/** input type for incrementing numeric columns in table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Inc_Input = {
  advertising_chat_id?: InputMaybe<Scalars['bigint']>;
  advertising_days?: InputMaybe<Scalars['Int']>;
  client_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  payment_id?: InputMaybe<Scalars['Int']>;
  payment_status?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['bigint']>;
  publication_hour?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Insert_Input = {
  advertising_chat_id?: InputMaybe<Scalars['bigint']>;
  advertising_days?: InputMaybe<Scalars['Int']>;
  chat?: InputMaybe<Auto_Poster_Bot_Advertising_Chat_Obj_Rel_Insert_Input>;
  client_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  insert_date?: InputMaybe<Scalars['timestamptz']>;
  keyboard?: InputMaybe<Scalars['String']>;
  passed_moderation?: InputMaybe<Scalars['Boolean']>;
  payment?: InputMaybe<Auto_Poster_Bot_Payment_Obj_Rel_Insert_Input>;
  payment_id?: InputMaybe<Scalars['Int']>;
  payment_status?: InputMaybe<Scalars['Int']>;
  photo?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['bigint']>;
  publication_end_date?: InputMaybe<Scalars['timestamptz']>;
  publication_hour?: InputMaybe<Scalars['Int']>;
  publication_start_date?: InputMaybe<Scalars['timestamptz']>;
  text?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Auto_Poster_Bot_User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Auto_Poster_Bot_Post_Max_Fields = {
  __typename?: 'auto_poster_bot_post_max_fields';
  advertising_chat_id?: Maybe<Scalars['bigint']>;
  advertising_days?: Maybe<Scalars['Int']>;
  client_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  insert_date?: Maybe<Scalars['timestamptz']>;
  keyboard?: Maybe<Scalars['String']>;
  payment_id?: Maybe<Scalars['Int']>;
  payment_status?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['bigint']>;
  publication_end_date?: Maybe<Scalars['timestamptz']>;
  publication_hour?: Maybe<Scalars['Int']>;
  publication_start_date?: Maybe<Scalars['timestamptz']>;
  text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Max_Order_By = {
  advertising_chat_id?: InputMaybe<Order_By>;
  advertising_days?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  insert_date?: InputMaybe<Order_By>;
  keyboard?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  photo?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  publication_end_date?: InputMaybe<Order_By>;
  publication_hour?: InputMaybe<Order_By>;
  publication_start_date?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auto_Poster_Bot_Post_Min_Fields = {
  __typename?: 'auto_poster_bot_post_min_fields';
  advertising_chat_id?: Maybe<Scalars['bigint']>;
  advertising_days?: Maybe<Scalars['Int']>;
  client_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  insert_date?: Maybe<Scalars['timestamptz']>;
  keyboard?: Maybe<Scalars['String']>;
  payment_id?: Maybe<Scalars['Int']>;
  payment_status?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['bigint']>;
  publication_end_date?: Maybe<Scalars['timestamptz']>;
  publication_hour?: Maybe<Scalars['Int']>;
  publication_start_date?: Maybe<Scalars['timestamptz']>;
  text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Min_Order_By = {
  advertising_chat_id?: InputMaybe<Order_By>;
  advertising_days?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  insert_date?: InputMaybe<Order_By>;
  keyboard?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  photo?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  publication_end_date?: InputMaybe<Order_By>;
  publication_hour?: InputMaybe<Order_By>;
  publication_start_date?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Mutation_Response = {
  __typename?: 'auto_poster_bot_post_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auto_Poster_Bot_Post>;
};

/** input type for inserting object relation for remote table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Obj_Rel_Insert_Input = {
  data: Auto_Poster_Bot_Post_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Auto_Poster_Bot_Post_On_Conflict>;
};

/** on conflict condition type for table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_On_Conflict = {
  constraint: Auto_Poster_Bot_Post_Constraint;
  update_columns?: Array<Auto_Poster_Bot_Post_Update_Column>;
  where?: InputMaybe<Auto_Poster_Bot_Post_Bool_Exp>;
};

/** Ordering options when selecting data from "auto_poster_bot.post". */
export type Auto_Poster_Bot_Post_Order_By = {
  advertising_chat_id?: InputMaybe<Order_By>;
  advertising_days?: InputMaybe<Order_By>;
  chat?: InputMaybe<Auto_Poster_Bot_Advertising_Chat_Order_By>;
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  insert_date?: InputMaybe<Order_By>;
  keyboard?: InputMaybe<Order_By>;
  passed_moderation?: InputMaybe<Order_By>;
  payment?: InputMaybe<Auto_Poster_Bot_Payment_Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  photo?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  publication_end_date?: InputMaybe<Order_By>;
  publication_hour?: InputMaybe<Order_By>;
  publication_start_date?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  user?: InputMaybe<Auto_Poster_Bot_User_Order_By>;
};

/** primary key columns input for table: auto_poster_bot_post */
export type Auto_Poster_Bot_Post_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "auto_poster_bot.post" */
export enum Auto_Poster_Bot_Post_Select_Column {
  /** column name */
  AdvertisingChatId = 'advertising_chat_id',
  /** column name */
  AdvertisingDays = 'advertising_days',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  Id = 'id',
  /** column name */
  InsertDate = 'insert_date',
  /** column name */
  Keyboard = 'keyboard',
  /** column name */
  PassedModeration = 'passed_moderation',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  Photo = 'photo',
  /** column name */
  Price = 'price',
  /** column name */
  PublicationEndDate = 'publication_end_date',
  /** column name */
  PublicationHour = 'publication_hour',
  /** column name */
  PublicationStartDate = 'publication_start_date',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Set_Input = {
  advertising_chat_id?: InputMaybe<Scalars['bigint']>;
  advertising_days?: InputMaybe<Scalars['Int']>;
  client_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  insert_date?: InputMaybe<Scalars['timestamptz']>;
  keyboard?: InputMaybe<Scalars['String']>;
  passed_moderation?: InputMaybe<Scalars['Boolean']>;
  payment_id?: InputMaybe<Scalars['Int']>;
  payment_status?: InputMaybe<Scalars['Int']>;
  photo?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['bigint']>;
  publication_end_date?: InputMaybe<Scalars['timestamptz']>;
  publication_hour?: InputMaybe<Scalars['Int']>;
  publication_start_date?: InputMaybe<Scalars['timestamptz']>;
  text?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Auto_Poster_Bot_Post_Stddev_Fields = {
  __typename?: 'auto_poster_bot_post_stddev_fields';
  advertising_chat_id?: Maybe<Scalars['Float']>;
  advertising_days?: Maybe<Scalars['Float']>;
  client_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  payment_status?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  publication_hour?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Stddev_Order_By = {
  advertising_chat_id?: InputMaybe<Order_By>;
  advertising_days?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  publication_hour?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Auto_Poster_Bot_Post_Stddev_Pop_Fields = {
  __typename?: 'auto_poster_bot_post_stddev_pop_fields';
  advertising_chat_id?: Maybe<Scalars['Float']>;
  advertising_days?: Maybe<Scalars['Float']>;
  client_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  payment_status?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  publication_hour?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Stddev_Pop_Order_By = {
  advertising_chat_id?: InputMaybe<Order_By>;
  advertising_days?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  publication_hour?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Auto_Poster_Bot_Post_Stddev_Samp_Fields = {
  __typename?: 'auto_poster_bot_post_stddev_samp_fields';
  advertising_chat_id?: Maybe<Scalars['Float']>;
  advertising_days?: Maybe<Scalars['Float']>;
  client_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  payment_status?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  publication_hour?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Stddev_Samp_Order_By = {
  advertising_chat_id?: InputMaybe<Order_By>;
  advertising_days?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  publication_hour?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Auto_Poster_Bot_Post_Sum_Fields = {
  __typename?: 'auto_poster_bot_post_sum_fields';
  advertising_chat_id?: Maybe<Scalars['bigint']>;
  advertising_days?: Maybe<Scalars['Int']>;
  client_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  payment_id?: Maybe<Scalars['Int']>;
  payment_status?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['bigint']>;
  publication_hour?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Sum_Order_By = {
  advertising_chat_id?: InputMaybe<Order_By>;
  advertising_days?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  publication_hour?: InputMaybe<Order_By>;
};

/** update columns of table "auto_poster_bot.post" */
export enum Auto_Poster_Bot_Post_Update_Column {
  /** column name */
  AdvertisingChatId = 'advertising_chat_id',
  /** column name */
  AdvertisingDays = 'advertising_days',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  Id = 'id',
  /** column name */
  InsertDate = 'insert_date',
  /** column name */
  Keyboard = 'keyboard',
  /** column name */
  PassedModeration = 'passed_moderation',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  Photo = 'photo',
  /** column name */
  Price = 'price',
  /** column name */
  PublicationEndDate = 'publication_end_date',
  /** column name */
  PublicationHour = 'publication_hour',
  /** column name */
  PublicationStartDate = 'publication_start_date',
  /** column name */
  Text = 'text'
}

/** aggregate var_pop on columns */
export type Auto_Poster_Bot_Post_Var_Pop_Fields = {
  __typename?: 'auto_poster_bot_post_var_pop_fields';
  advertising_chat_id?: Maybe<Scalars['Float']>;
  advertising_days?: Maybe<Scalars['Float']>;
  client_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  payment_status?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  publication_hour?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Var_Pop_Order_By = {
  advertising_chat_id?: InputMaybe<Order_By>;
  advertising_days?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  publication_hour?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Auto_Poster_Bot_Post_Var_Samp_Fields = {
  __typename?: 'auto_poster_bot_post_var_samp_fields';
  advertising_chat_id?: Maybe<Scalars['Float']>;
  advertising_days?: Maybe<Scalars['Float']>;
  client_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  payment_status?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  publication_hour?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Var_Samp_Order_By = {
  advertising_chat_id?: InputMaybe<Order_By>;
  advertising_days?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  publication_hour?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Auto_Poster_Bot_Post_Variance_Fields = {
  __typename?: 'auto_poster_bot_post_variance_fields';
  advertising_chat_id?: Maybe<Scalars['Float']>;
  advertising_days?: Maybe<Scalars['Float']>;
  client_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  payment_status?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  publication_hour?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auto_poster_bot.post" */
export type Auto_Poster_Bot_Post_Variance_Order_By = {
  advertising_chat_id?: InputMaybe<Order_By>;
  advertising_days?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  publication_hour?: InputMaybe<Order_By>;
};

/** columns and relationships of "auto_poster_bot.user" */
export type Auto_Poster_Bot_User = {
  __typename?: 'auto_poster_bot_user';
  /** An array relationship */
  advertising_posts: Array<Auto_Poster_Bot_Post>;
  /** An aggregate relationship */
  advertising_posts_aggregate: Auto_Poster_Bot_Post_Aggregate;
  balance: Scalars['Int'];
  chat_id: Scalars['bigint'];
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['bigint'];
  last_name?: Maybe<Scalars['String']>;
  status_id: Scalars['Int'];
  /** An object relationship */
  user_status: Auto_Poster_Bot_User_Status;
  username: Scalars['String'];
};


/** columns and relationships of "auto_poster_bot.user" */
export type Auto_Poster_Bot_UserAdvertising_PostsArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_Post_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_Post_Bool_Exp>;
};


/** columns and relationships of "auto_poster_bot.user" */
export type Auto_Poster_Bot_UserAdvertising_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_Post_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_Post_Bool_Exp>;
};

/** aggregated selection of "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Aggregate = {
  __typename?: 'auto_poster_bot_user_aggregate';
  aggregate?: Maybe<Auto_Poster_Bot_User_Aggregate_Fields>;
  nodes: Array<Auto_Poster_Bot_User>;
};

/** aggregate fields of "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Aggregate_Fields = {
  __typename?: 'auto_poster_bot_user_aggregate_fields';
  avg?: Maybe<Auto_Poster_Bot_User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auto_Poster_Bot_User_Max_Fields>;
  min?: Maybe<Auto_Poster_Bot_User_Min_Fields>;
  stddev?: Maybe<Auto_Poster_Bot_User_Stddev_Fields>;
  stddev_pop?: Maybe<Auto_Poster_Bot_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auto_Poster_Bot_User_Stddev_Samp_Fields>;
  sum?: Maybe<Auto_Poster_Bot_User_Sum_Fields>;
  var_pop?: Maybe<Auto_Poster_Bot_User_Var_Pop_Fields>;
  var_samp?: Maybe<Auto_Poster_Bot_User_Var_Samp_Fields>;
  variance?: Maybe<Auto_Poster_Bot_User_Variance_Fields>;
};


/** aggregate fields of "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auto_Poster_Bot_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Aggregate_Order_By = {
  avg?: InputMaybe<Auto_Poster_Bot_User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auto_Poster_Bot_User_Max_Order_By>;
  min?: InputMaybe<Auto_Poster_Bot_User_Min_Order_By>;
  stddev?: InputMaybe<Auto_Poster_Bot_User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Auto_Poster_Bot_User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Auto_Poster_Bot_User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Auto_Poster_Bot_User_Sum_Order_By>;
  var_pop?: InputMaybe<Auto_Poster_Bot_User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Auto_Poster_Bot_User_Var_Samp_Order_By>;
  variance?: InputMaybe<Auto_Poster_Bot_User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Arr_Rel_Insert_Input = {
  data: Array<Auto_Poster_Bot_User_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Auto_Poster_Bot_User_On_Conflict>;
};

/** aggregate avg on columns */
export type Auto_Poster_Bot_User_Avg_Fields = {
  __typename?: 'auto_poster_bot_user_avg_fields';
  balance?: Maybe<Scalars['Float']>;
  chat_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  status_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Avg_Order_By = {
  balance?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auto_poster_bot.user". All fields are combined with a logical 'AND'. */
export type Auto_Poster_Bot_User_Bool_Exp = {
  _and?: InputMaybe<Array<Auto_Poster_Bot_User_Bool_Exp>>;
  _not?: InputMaybe<Auto_Poster_Bot_User_Bool_Exp>;
  _or?: InputMaybe<Array<Auto_Poster_Bot_User_Bool_Exp>>;
  advertising_posts?: InputMaybe<Auto_Poster_Bot_Post_Bool_Exp>;
  balance?: InputMaybe<Int_Comparison_Exp>;
  chat_id?: InputMaybe<Bigint_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  status_id?: InputMaybe<Int_Comparison_Exp>;
  user_status?: InputMaybe<Auto_Poster_Bot_User_Status_Bool_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auto_poster_bot.user" */
export enum Auto_Poster_Bot_User_Constraint {
  /** unique or primary key constraint */
  UserIdKey = 'user_id_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing numeric columns in table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Inc_Input = {
  balance?: InputMaybe<Scalars['Int']>;
  chat_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  status_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Insert_Input = {
  advertising_posts?: InputMaybe<Auto_Poster_Bot_Post_Arr_Rel_Insert_Input>;
  balance?: InputMaybe<Scalars['Int']>;
  chat_id?: InputMaybe<Scalars['bigint']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  last_name?: InputMaybe<Scalars['String']>;
  status_id?: InputMaybe<Scalars['Int']>;
  user_status?: InputMaybe<Auto_Poster_Bot_User_Status_Obj_Rel_Insert_Input>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auto_Poster_Bot_User_Max_Fields = {
  __typename?: 'auto_poster_bot_user_max_fields';
  balance?: Maybe<Scalars['Int']>;
  chat_id?: Maybe<Scalars['bigint']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  last_name?: Maybe<Scalars['String']>;
  status_id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Max_Order_By = {
  balance?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auto_Poster_Bot_User_Min_Fields = {
  __typename?: 'auto_poster_bot_user_min_fields';
  balance?: Maybe<Scalars['Int']>;
  chat_id?: Maybe<Scalars['bigint']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  last_name?: Maybe<Scalars['String']>;
  status_id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Min_Order_By = {
  balance?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Mutation_Response = {
  __typename?: 'auto_poster_bot_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auto_Poster_Bot_User>;
};

/** input type for inserting object relation for remote table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Obj_Rel_Insert_Input = {
  data: Auto_Poster_Bot_User_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Auto_Poster_Bot_User_On_Conflict>;
};

/** on conflict condition type for table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_On_Conflict = {
  constraint: Auto_Poster_Bot_User_Constraint;
  update_columns?: Array<Auto_Poster_Bot_User_Update_Column>;
  where?: InputMaybe<Auto_Poster_Bot_User_Bool_Exp>;
};

/** Ordering options when selecting data from "auto_poster_bot.user". */
export type Auto_Poster_Bot_User_Order_By = {
  advertising_posts_aggregate?: InputMaybe<Auto_Poster_Bot_Post_Aggregate_Order_By>;
  balance?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  user_status?: InputMaybe<Auto_Poster_Bot_User_Status_Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auto_poster_bot_user */
export type Auto_Poster_Bot_User_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "auto_poster_bot.user" */
export enum Auto_Poster_Bot_User_Select_Column {
  /** column name */
  Balance = 'balance',
  /** column name */
  ChatId = 'chat_id',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Set_Input = {
  balance?: InputMaybe<Scalars['Int']>;
  chat_id?: InputMaybe<Scalars['bigint']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  last_name?: InputMaybe<Scalars['String']>;
  status_id?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "auto_poster_bot.user_status" */
export type Auto_Poster_Bot_User_Status = {
  __typename?: 'auto_poster_bot_user_status';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  users: Array<Auto_Poster_Bot_User>;
  /** An aggregate relationship */
  users_aggregate: Auto_Poster_Bot_User_Aggregate;
};


/** columns and relationships of "auto_poster_bot.user_status" */
export type Auto_Poster_Bot_User_StatusUsersArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_User_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_User_Bool_Exp>;
};


/** columns and relationships of "auto_poster_bot.user_status" */
export type Auto_Poster_Bot_User_StatusUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_User_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_User_Bool_Exp>;
};

/** aggregated selection of "auto_poster_bot.user_status" */
export type Auto_Poster_Bot_User_Status_Aggregate = {
  __typename?: 'auto_poster_bot_user_status_aggregate';
  aggregate?: Maybe<Auto_Poster_Bot_User_Status_Aggregate_Fields>;
  nodes: Array<Auto_Poster_Bot_User_Status>;
};

/** aggregate fields of "auto_poster_bot.user_status" */
export type Auto_Poster_Bot_User_Status_Aggregate_Fields = {
  __typename?: 'auto_poster_bot_user_status_aggregate_fields';
  avg?: Maybe<Auto_Poster_Bot_User_Status_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auto_Poster_Bot_User_Status_Max_Fields>;
  min?: Maybe<Auto_Poster_Bot_User_Status_Min_Fields>;
  stddev?: Maybe<Auto_Poster_Bot_User_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Auto_Poster_Bot_User_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auto_Poster_Bot_User_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Auto_Poster_Bot_User_Status_Sum_Fields>;
  var_pop?: Maybe<Auto_Poster_Bot_User_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Auto_Poster_Bot_User_Status_Var_Samp_Fields>;
  variance?: Maybe<Auto_Poster_Bot_User_Status_Variance_Fields>;
};


/** aggregate fields of "auto_poster_bot.user_status" */
export type Auto_Poster_Bot_User_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auto_Poster_Bot_User_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Auto_Poster_Bot_User_Status_Avg_Fields = {
  __typename?: 'auto_poster_bot_user_status_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "auto_poster_bot.user_status". All fields are combined with a logical 'AND'. */
export type Auto_Poster_Bot_User_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Auto_Poster_Bot_User_Status_Bool_Exp>>;
  _not?: InputMaybe<Auto_Poster_Bot_User_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Auto_Poster_Bot_User_Status_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Auto_Poster_Bot_User_Bool_Exp>;
};

/** unique or primary key constraints on table "auto_poster_bot.user_status" */
export enum Auto_Poster_Bot_User_Status_Constraint {
  /** unique or primary key constraint */
  UserStatusPkey = 'user_status_pkey'
}

/** input type for incrementing numeric columns in table "auto_poster_bot.user_status" */
export type Auto_Poster_Bot_User_Status_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "auto_poster_bot.user_status" */
export type Auto_Poster_Bot_User_Status_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Auto_Poster_Bot_User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Auto_Poster_Bot_User_Status_Max_Fields = {
  __typename?: 'auto_poster_bot_user_status_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auto_Poster_Bot_User_Status_Min_Fields = {
  __typename?: 'auto_poster_bot_user_status_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auto_poster_bot.user_status" */
export type Auto_Poster_Bot_User_Status_Mutation_Response = {
  __typename?: 'auto_poster_bot_user_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auto_Poster_Bot_User_Status>;
};

/** input type for inserting object relation for remote table "auto_poster_bot.user_status" */
export type Auto_Poster_Bot_User_Status_Obj_Rel_Insert_Input = {
  data: Auto_Poster_Bot_User_Status_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Auto_Poster_Bot_User_Status_On_Conflict>;
};

/** on conflict condition type for table "auto_poster_bot.user_status" */
export type Auto_Poster_Bot_User_Status_On_Conflict = {
  constraint: Auto_Poster_Bot_User_Status_Constraint;
  update_columns?: Array<Auto_Poster_Bot_User_Status_Update_Column>;
  where?: InputMaybe<Auto_Poster_Bot_User_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "auto_poster_bot.user_status". */
export type Auto_Poster_Bot_User_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Auto_Poster_Bot_User_Aggregate_Order_By>;
};

/** primary key columns input for table: auto_poster_bot_user_status */
export type Auto_Poster_Bot_User_Status_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "auto_poster_bot.user_status" */
export enum Auto_Poster_Bot_User_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "auto_poster_bot.user_status" */
export type Auto_Poster_Bot_User_Status_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Auto_Poster_Bot_User_Status_Stddev_Fields = {
  __typename?: 'auto_poster_bot_user_status_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Auto_Poster_Bot_User_Status_Stddev_Pop_Fields = {
  __typename?: 'auto_poster_bot_user_status_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Auto_Poster_Bot_User_Status_Stddev_Samp_Fields = {
  __typename?: 'auto_poster_bot_user_status_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Auto_Poster_Bot_User_Status_Sum_Fields = {
  __typename?: 'auto_poster_bot_user_status_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "auto_poster_bot.user_status" */
export enum Auto_Poster_Bot_User_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Auto_Poster_Bot_User_Status_Var_Pop_Fields = {
  __typename?: 'auto_poster_bot_user_status_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Auto_Poster_Bot_User_Status_Var_Samp_Fields = {
  __typename?: 'auto_poster_bot_user_status_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Auto_Poster_Bot_User_Status_Variance_Fields = {
  __typename?: 'auto_poster_bot_user_status_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Auto_Poster_Bot_User_Stddev_Fields = {
  __typename?: 'auto_poster_bot_user_stddev_fields';
  balance?: Maybe<Scalars['Float']>;
  chat_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  status_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Stddev_Order_By = {
  balance?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Auto_Poster_Bot_User_Stddev_Pop_Fields = {
  __typename?: 'auto_poster_bot_user_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']>;
  chat_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  status_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Stddev_Pop_Order_By = {
  balance?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Auto_Poster_Bot_User_Stddev_Samp_Fields = {
  __typename?: 'auto_poster_bot_user_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']>;
  chat_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  status_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Stddev_Samp_Order_By = {
  balance?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Auto_Poster_Bot_User_Sum_Fields = {
  __typename?: 'auto_poster_bot_user_sum_fields';
  balance?: Maybe<Scalars['Int']>;
  chat_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  status_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Sum_Order_By = {
  balance?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** update columns of table "auto_poster_bot.user" */
export enum Auto_Poster_Bot_User_Update_Column {
  /** column name */
  Balance = 'balance',
  /** column name */
  ChatId = 'chat_id',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type Auto_Poster_Bot_User_Var_Pop_Fields = {
  __typename?: 'auto_poster_bot_user_var_pop_fields';
  balance?: Maybe<Scalars['Float']>;
  chat_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  status_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Var_Pop_Order_By = {
  balance?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Auto_Poster_Bot_User_Var_Samp_Fields = {
  __typename?: 'auto_poster_bot_user_var_samp_fields';
  balance?: Maybe<Scalars['Float']>;
  chat_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  status_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Var_Samp_Order_By = {
  balance?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Auto_Poster_Bot_User_Variance_Fields = {
  __typename?: 'auto_poster_bot_user_variance_fields';
  balance?: Maybe<Scalars['Float']>;
  chat_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  status_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auto_poster_bot.user" */
export type Auto_Poster_Bot_User_Variance_Order_By = {
  balance?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "erp.AccessLevels" */
export type Erp_AccessLevels = {
  __typename?: 'erp_AccessLevels';
  AccessLevelID: Scalars['Int'];
  Name: Scalars['String'];
  /** An array relationship */
  Users: Array<Erp_Users>;
  /** An aggregate relationship */
  Users_aggregate: Erp_Users_Aggregate;
};


/** columns and relationships of "erp.AccessLevels" */
export type Erp_AccessLevelsUsersArgs = {
  distinct_on?: InputMaybe<Array<Erp_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Users_Order_By>>;
  where?: InputMaybe<Erp_Users_Bool_Exp>;
};


/** columns and relationships of "erp.AccessLevels" */
export type Erp_AccessLevelsUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Users_Order_By>>;
  where?: InputMaybe<Erp_Users_Bool_Exp>;
};

/** aggregated selection of "erp.AccessLevels" */
export type Erp_AccessLevels_Aggregate = {
  __typename?: 'erp_AccessLevels_aggregate';
  aggregate?: Maybe<Erp_AccessLevels_Aggregate_Fields>;
  nodes: Array<Erp_AccessLevels>;
};

/** aggregate fields of "erp.AccessLevels" */
export type Erp_AccessLevels_Aggregate_Fields = {
  __typename?: 'erp_AccessLevels_aggregate_fields';
  avg?: Maybe<Erp_AccessLevels_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Erp_AccessLevels_Max_Fields>;
  min?: Maybe<Erp_AccessLevels_Min_Fields>;
  stddev?: Maybe<Erp_AccessLevels_Stddev_Fields>;
  stddev_pop?: Maybe<Erp_AccessLevels_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Erp_AccessLevels_Stddev_Samp_Fields>;
  sum?: Maybe<Erp_AccessLevels_Sum_Fields>;
  var_pop?: Maybe<Erp_AccessLevels_Var_Pop_Fields>;
  var_samp?: Maybe<Erp_AccessLevels_Var_Samp_Fields>;
  variance?: Maybe<Erp_AccessLevels_Variance_Fields>;
};


/** aggregate fields of "erp.AccessLevels" */
export type Erp_AccessLevels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Erp_AccessLevels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Erp_AccessLevels_Avg_Fields = {
  __typename?: 'erp_AccessLevels_avg_fields';
  AccessLevelID?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "erp.AccessLevels". All fields are combined with a logical 'AND'. */
export type Erp_AccessLevels_Bool_Exp = {
  AccessLevelID?: InputMaybe<Int_Comparison_Exp>;
  Name?: InputMaybe<String_Comparison_Exp>;
  Users?: InputMaybe<Erp_Users_Bool_Exp>;
  _and?: InputMaybe<Array<Erp_AccessLevels_Bool_Exp>>;
  _not?: InputMaybe<Erp_AccessLevels_Bool_Exp>;
  _or?: InputMaybe<Array<Erp_AccessLevels_Bool_Exp>>;
};

/** unique or primary key constraints on table "erp.AccessLevels" */
export enum Erp_AccessLevels_Constraint {
  /** unique or primary key constraint */
  AccessLevelsPkey = 'AccessLevels_pkey'
}

/** input type for incrementing numeric columns in table "erp.AccessLevels" */
export type Erp_AccessLevels_Inc_Input = {
  AccessLevelID?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "erp.AccessLevels" */
export type Erp_AccessLevels_Insert_Input = {
  AccessLevelID?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
  Users?: InputMaybe<Erp_Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Erp_AccessLevels_Max_Fields = {
  __typename?: 'erp_AccessLevels_max_fields';
  AccessLevelID?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Erp_AccessLevels_Min_Fields = {
  __typename?: 'erp_AccessLevels_min_fields';
  AccessLevelID?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "erp.AccessLevels" */
export type Erp_AccessLevels_Mutation_Response = {
  __typename?: 'erp_AccessLevels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Erp_AccessLevels>;
};

/** input type for inserting object relation for remote table "erp.AccessLevels" */
export type Erp_AccessLevels_Obj_Rel_Insert_Input = {
  data: Erp_AccessLevels_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Erp_AccessLevels_On_Conflict>;
};

/** on conflict condition type for table "erp.AccessLevels" */
export type Erp_AccessLevels_On_Conflict = {
  constraint: Erp_AccessLevels_Constraint;
  update_columns?: Array<Erp_AccessLevels_Update_Column>;
  where?: InputMaybe<Erp_AccessLevels_Bool_Exp>;
};

/** Ordering options when selecting data from "erp.AccessLevels". */
export type Erp_AccessLevels_Order_By = {
  AccessLevelID?: InputMaybe<Order_By>;
  Name?: InputMaybe<Order_By>;
  Users_aggregate?: InputMaybe<Erp_Users_Aggregate_Order_By>;
};

/** primary key columns input for table: erp_AccessLevels */
export type Erp_AccessLevels_Pk_Columns_Input = {
  AccessLevelID: Scalars['Int'];
};

/** select columns of table "erp.AccessLevels" */
export enum Erp_AccessLevels_Select_Column {
  /** column name */
  AccessLevelId = 'AccessLevelID',
  /** column name */
  Name = 'Name'
}

/** input type for updating data in table "erp.AccessLevels" */
export type Erp_AccessLevels_Set_Input = {
  AccessLevelID?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Erp_AccessLevels_Stddev_Fields = {
  __typename?: 'erp_AccessLevels_stddev_fields';
  AccessLevelID?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Erp_AccessLevels_Stddev_Pop_Fields = {
  __typename?: 'erp_AccessLevels_stddev_pop_fields';
  AccessLevelID?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Erp_AccessLevels_Stddev_Samp_Fields = {
  __typename?: 'erp_AccessLevels_stddev_samp_fields';
  AccessLevelID?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Erp_AccessLevels_Sum_Fields = {
  __typename?: 'erp_AccessLevels_sum_fields';
  AccessLevelID?: Maybe<Scalars['Int']>;
};

/** update columns of table "erp.AccessLevels" */
export enum Erp_AccessLevels_Update_Column {
  /** column name */
  AccessLevelId = 'AccessLevelID',
  /** column name */
  Name = 'Name'
}

/** aggregate var_pop on columns */
export type Erp_AccessLevels_Var_Pop_Fields = {
  __typename?: 'erp_AccessLevels_var_pop_fields';
  AccessLevelID?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Erp_AccessLevels_Var_Samp_Fields = {
  __typename?: 'erp_AccessLevels_var_samp_fields';
  AccessLevelID?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Erp_AccessLevels_Variance_Fields = {
  __typename?: 'erp_AccessLevels_variance_fields';
  AccessLevelID?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "erp.Comments" */
export type Erp_Comments = {
  __typename?: 'erp_Comments';
  CommentID: Scalars['Int'];
  /** An array relationship */
  Notifications: Array<Erp_Notifications>;
  /** An aggregate relationship */
  Notifications_aggregate: Erp_Notifications_Aggregate;
  /** An object relationship */
  Order: Erp_Orders;
  OrderID: Scalars['Int'];
  Text: Scalars['String'];
  Timestamp: Scalars['timestamptz'];
  /** An object relationship */
  User: Erp_Users;
  UserID: Scalars['Int'];
};


/** columns and relationships of "erp.Comments" */
export type Erp_CommentsNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Erp_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Notifications_Order_By>>;
  where?: InputMaybe<Erp_Notifications_Bool_Exp>;
};


/** columns and relationships of "erp.Comments" */
export type Erp_CommentsNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Notifications_Order_By>>;
  where?: InputMaybe<Erp_Notifications_Bool_Exp>;
};

/** aggregated selection of "erp.Comments" */
export type Erp_Comments_Aggregate = {
  __typename?: 'erp_Comments_aggregate';
  aggregate?: Maybe<Erp_Comments_Aggregate_Fields>;
  nodes: Array<Erp_Comments>;
};

/** aggregate fields of "erp.Comments" */
export type Erp_Comments_Aggregate_Fields = {
  __typename?: 'erp_Comments_aggregate_fields';
  avg?: Maybe<Erp_Comments_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Erp_Comments_Max_Fields>;
  min?: Maybe<Erp_Comments_Min_Fields>;
  stddev?: Maybe<Erp_Comments_Stddev_Fields>;
  stddev_pop?: Maybe<Erp_Comments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Erp_Comments_Stddev_Samp_Fields>;
  sum?: Maybe<Erp_Comments_Sum_Fields>;
  var_pop?: Maybe<Erp_Comments_Var_Pop_Fields>;
  var_samp?: Maybe<Erp_Comments_Var_Samp_Fields>;
  variance?: Maybe<Erp_Comments_Variance_Fields>;
};


/** aggregate fields of "erp.Comments" */
export type Erp_Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Erp_Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "erp.Comments" */
export type Erp_Comments_Aggregate_Order_By = {
  avg?: InputMaybe<Erp_Comments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Erp_Comments_Max_Order_By>;
  min?: InputMaybe<Erp_Comments_Min_Order_By>;
  stddev?: InputMaybe<Erp_Comments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Erp_Comments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Erp_Comments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Erp_Comments_Sum_Order_By>;
  var_pop?: InputMaybe<Erp_Comments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Erp_Comments_Var_Samp_Order_By>;
  variance?: InputMaybe<Erp_Comments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "erp.Comments" */
export type Erp_Comments_Arr_Rel_Insert_Input = {
  data: Array<Erp_Comments_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Erp_Comments_On_Conflict>;
};

/** aggregate avg on columns */
export type Erp_Comments_Avg_Fields = {
  __typename?: 'erp_Comments_avg_fields';
  CommentID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "erp.Comments" */
export type Erp_Comments_Avg_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "erp.Comments". All fields are combined with a logical 'AND'. */
export type Erp_Comments_Bool_Exp = {
  CommentID?: InputMaybe<Int_Comparison_Exp>;
  Notifications?: InputMaybe<Erp_Notifications_Bool_Exp>;
  Order?: InputMaybe<Erp_Orders_Bool_Exp>;
  OrderID?: InputMaybe<Int_Comparison_Exp>;
  Text?: InputMaybe<String_Comparison_Exp>;
  Timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  User?: InputMaybe<Erp_Users_Bool_Exp>;
  UserID?: InputMaybe<Int_Comparison_Exp>;
  _and?: InputMaybe<Array<Erp_Comments_Bool_Exp>>;
  _not?: InputMaybe<Erp_Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Erp_Comments_Bool_Exp>>;
};

/** unique or primary key constraints on table "erp.Comments" */
export enum Erp_Comments_Constraint {
  /** unique or primary key constraint */
  CommentsPkey = 'Comments_pkey'
}

/** input type for incrementing numeric columns in table "erp.Comments" */
export type Erp_Comments_Inc_Input = {
  CommentID?: InputMaybe<Scalars['Int']>;
  OrderID?: InputMaybe<Scalars['Int']>;
  UserID?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "erp.Comments" */
export type Erp_Comments_Insert_Input = {
  CommentID?: InputMaybe<Scalars['Int']>;
  Notifications?: InputMaybe<Erp_Notifications_Arr_Rel_Insert_Input>;
  Order?: InputMaybe<Erp_Orders_Obj_Rel_Insert_Input>;
  OrderID?: InputMaybe<Scalars['Int']>;
  Text?: InputMaybe<Scalars['String']>;
  Timestamp?: InputMaybe<Scalars['timestamptz']>;
  User?: InputMaybe<Erp_Users_Obj_Rel_Insert_Input>;
  UserID?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Erp_Comments_Max_Fields = {
  __typename?: 'erp_Comments_max_fields';
  CommentID?: Maybe<Scalars['Int']>;
  OrderID?: Maybe<Scalars['Int']>;
  Text?: Maybe<Scalars['String']>;
  Timestamp?: Maybe<Scalars['timestamptz']>;
  UserID?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "erp.Comments" */
export type Erp_Comments_Max_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  Text?: InputMaybe<Order_By>;
  Timestamp?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Erp_Comments_Min_Fields = {
  __typename?: 'erp_Comments_min_fields';
  CommentID?: Maybe<Scalars['Int']>;
  OrderID?: Maybe<Scalars['Int']>;
  Text?: Maybe<Scalars['String']>;
  Timestamp?: Maybe<Scalars['timestamptz']>;
  UserID?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "erp.Comments" */
export type Erp_Comments_Min_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  Text?: InputMaybe<Order_By>;
  Timestamp?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "erp.Comments" */
export type Erp_Comments_Mutation_Response = {
  __typename?: 'erp_Comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Erp_Comments>;
};

/** input type for inserting object relation for remote table "erp.Comments" */
export type Erp_Comments_Obj_Rel_Insert_Input = {
  data: Erp_Comments_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Erp_Comments_On_Conflict>;
};

/** on conflict condition type for table "erp.Comments" */
export type Erp_Comments_On_Conflict = {
  constraint: Erp_Comments_Constraint;
  update_columns?: Array<Erp_Comments_Update_Column>;
  where?: InputMaybe<Erp_Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "erp.Comments". */
export type Erp_Comments_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  Notifications_aggregate?: InputMaybe<Erp_Notifications_Aggregate_Order_By>;
  Order?: InputMaybe<Erp_Orders_Order_By>;
  OrderID?: InputMaybe<Order_By>;
  Text?: InputMaybe<Order_By>;
  Timestamp?: InputMaybe<Order_By>;
  User?: InputMaybe<Erp_Users_Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** primary key columns input for table: erp_Comments */
export type Erp_Comments_Pk_Columns_Input = {
  CommentID: Scalars['Int'];
};

/** select columns of table "erp.Comments" */
export enum Erp_Comments_Select_Column {
  /** column name */
  CommentId = 'CommentID',
  /** column name */
  OrderId = 'OrderID',
  /** column name */
  Text = 'Text',
  /** column name */
  Timestamp = 'Timestamp',
  /** column name */
  UserId = 'UserID'
}

/** input type for updating data in table "erp.Comments" */
export type Erp_Comments_Set_Input = {
  CommentID?: InputMaybe<Scalars['Int']>;
  OrderID?: InputMaybe<Scalars['Int']>;
  Text?: InputMaybe<Scalars['String']>;
  Timestamp?: InputMaybe<Scalars['timestamptz']>;
  UserID?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Erp_Comments_Stddev_Fields = {
  __typename?: 'erp_Comments_stddev_fields';
  CommentID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "erp.Comments" */
export type Erp_Comments_Stddev_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Erp_Comments_Stddev_Pop_Fields = {
  __typename?: 'erp_Comments_stddev_pop_fields';
  CommentID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "erp.Comments" */
export type Erp_Comments_Stddev_Pop_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Erp_Comments_Stddev_Samp_Fields = {
  __typename?: 'erp_Comments_stddev_samp_fields';
  CommentID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "erp.Comments" */
export type Erp_Comments_Stddev_Samp_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Erp_Comments_Sum_Fields = {
  __typename?: 'erp_Comments_sum_fields';
  CommentID?: Maybe<Scalars['Int']>;
  OrderID?: Maybe<Scalars['Int']>;
  UserID?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "erp.Comments" */
export type Erp_Comments_Sum_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** update columns of table "erp.Comments" */
export enum Erp_Comments_Update_Column {
  /** column name */
  CommentId = 'CommentID',
  /** column name */
  OrderId = 'OrderID',
  /** column name */
  Text = 'Text',
  /** column name */
  Timestamp = 'Timestamp',
  /** column name */
  UserId = 'UserID'
}

/** aggregate var_pop on columns */
export type Erp_Comments_Var_Pop_Fields = {
  __typename?: 'erp_Comments_var_pop_fields';
  CommentID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "erp.Comments" */
export type Erp_Comments_Var_Pop_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Erp_Comments_Var_Samp_Fields = {
  __typename?: 'erp_Comments_var_samp_fields';
  CommentID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "erp.Comments" */
export type Erp_Comments_Var_Samp_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Erp_Comments_Variance_Fields = {
  __typename?: 'erp_Comments_variance_fields';
  CommentID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "erp.Comments" */
export type Erp_Comments_Variance_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** columns and relationships of "erp.Docs" */
export type Erp_Docs = {
  __typename?: 'erp_Docs';
  FileName?: Maybe<Scalars['String']>;
  ID: Scalars['Int'];
  Key: Scalars['String'];
  /** An object relationship */
  Order: Erp_Orders;
  OrderID: Scalars['Int'];
  Size?: Maybe<Scalars['Int']>;
  UploadingDate?: Maybe<Scalars['timestamp']>;
};

/** aggregated selection of "erp.Docs" */
export type Erp_Docs_Aggregate = {
  __typename?: 'erp_Docs_aggregate';
  aggregate?: Maybe<Erp_Docs_Aggregate_Fields>;
  nodes: Array<Erp_Docs>;
};

/** aggregate fields of "erp.Docs" */
export type Erp_Docs_Aggregate_Fields = {
  __typename?: 'erp_Docs_aggregate_fields';
  avg?: Maybe<Erp_Docs_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Erp_Docs_Max_Fields>;
  min?: Maybe<Erp_Docs_Min_Fields>;
  stddev?: Maybe<Erp_Docs_Stddev_Fields>;
  stddev_pop?: Maybe<Erp_Docs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Erp_Docs_Stddev_Samp_Fields>;
  sum?: Maybe<Erp_Docs_Sum_Fields>;
  var_pop?: Maybe<Erp_Docs_Var_Pop_Fields>;
  var_samp?: Maybe<Erp_Docs_Var_Samp_Fields>;
  variance?: Maybe<Erp_Docs_Variance_Fields>;
};


/** aggregate fields of "erp.Docs" */
export type Erp_Docs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Erp_Docs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "erp.Docs" */
export type Erp_Docs_Aggregate_Order_By = {
  avg?: InputMaybe<Erp_Docs_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Erp_Docs_Max_Order_By>;
  min?: InputMaybe<Erp_Docs_Min_Order_By>;
  stddev?: InputMaybe<Erp_Docs_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Erp_Docs_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Erp_Docs_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Erp_Docs_Sum_Order_By>;
  var_pop?: InputMaybe<Erp_Docs_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Erp_Docs_Var_Samp_Order_By>;
  variance?: InputMaybe<Erp_Docs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "erp.Docs" */
export type Erp_Docs_Arr_Rel_Insert_Input = {
  data: Array<Erp_Docs_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Erp_Docs_On_Conflict>;
};

/** aggregate avg on columns */
export type Erp_Docs_Avg_Fields = {
  __typename?: 'erp_Docs_avg_fields';
  ID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  Size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "erp.Docs" */
export type Erp_Docs_Avg_Order_By = {
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  Size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "erp.Docs". All fields are combined with a logical 'AND'. */
export type Erp_Docs_Bool_Exp = {
  FileName?: InputMaybe<String_Comparison_Exp>;
  ID?: InputMaybe<Int_Comparison_Exp>;
  Key?: InputMaybe<String_Comparison_Exp>;
  Order?: InputMaybe<Erp_Orders_Bool_Exp>;
  OrderID?: InputMaybe<Int_Comparison_Exp>;
  Size?: InputMaybe<Int_Comparison_Exp>;
  UploadingDate?: InputMaybe<Timestamp_Comparison_Exp>;
  _and?: InputMaybe<Array<Erp_Docs_Bool_Exp>>;
  _not?: InputMaybe<Erp_Docs_Bool_Exp>;
  _or?: InputMaybe<Array<Erp_Docs_Bool_Exp>>;
};

/** unique or primary key constraints on table "erp.Docs" */
export enum Erp_Docs_Constraint {
  /** unique or primary key constraint */
  DocsIdKey = 'Docs_ID_key',
  /** unique or primary key constraint */
  DocsKeyKey = 'Docs_Key_key',
  /** unique or primary key constraint */
  DocsPkey = 'Docs_pkey'
}

/** input type for incrementing numeric columns in table "erp.Docs" */
export type Erp_Docs_Inc_Input = {
  ID?: InputMaybe<Scalars['Int']>;
  OrderID?: InputMaybe<Scalars['Int']>;
  Size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "erp.Docs" */
export type Erp_Docs_Insert_Input = {
  FileName?: InputMaybe<Scalars['String']>;
  ID?: InputMaybe<Scalars['Int']>;
  Key?: InputMaybe<Scalars['String']>;
  Order?: InputMaybe<Erp_Orders_Obj_Rel_Insert_Input>;
  OrderID?: InputMaybe<Scalars['Int']>;
  Size?: InputMaybe<Scalars['Int']>;
  UploadingDate?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Erp_Docs_Max_Fields = {
  __typename?: 'erp_Docs_max_fields';
  FileName?: Maybe<Scalars['String']>;
  ID?: Maybe<Scalars['Int']>;
  Key?: Maybe<Scalars['String']>;
  OrderID?: Maybe<Scalars['Int']>;
  Size?: Maybe<Scalars['Int']>;
  UploadingDate?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "erp.Docs" */
export type Erp_Docs_Max_Order_By = {
  FileName?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  Key?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  Size?: InputMaybe<Order_By>;
  UploadingDate?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Erp_Docs_Min_Fields = {
  __typename?: 'erp_Docs_min_fields';
  FileName?: Maybe<Scalars['String']>;
  ID?: Maybe<Scalars['Int']>;
  Key?: Maybe<Scalars['String']>;
  OrderID?: Maybe<Scalars['Int']>;
  Size?: Maybe<Scalars['Int']>;
  UploadingDate?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "erp.Docs" */
export type Erp_Docs_Min_Order_By = {
  FileName?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  Key?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  Size?: InputMaybe<Order_By>;
  UploadingDate?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "erp.Docs" */
export type Erp_Docs_Mutation_Response = {
  __typename?: 'erp_Docs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Erp_Docs>;
};

/** on conflict condition type for table "erp.Docs" */
export type Erp_Docs_On_Conflict = {
  constraint: Erp_Docs_Constraint;
  update_columns?: Array<Erp_Docs_Update_Column>;
  where?: InputMaybe<Erp_Docs_Bool_Exp>;
};

/** Ordering options when selecting data from "erp.Docs". */
export type Erp_Docs_Order_By = {
  FileName?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  Key?: InputMaybe<Order_By>;
  Order?: InputMaybe<Erp_Orders_Order_By>;
  OrderID?: InputMaybe<Order_By>;
  Size?: InputMaybe<Order_By>;
  UploadingDate?: InputMaybe<Order_By>;
};

/** primary key columns input for table: erp_Docs */
export type Erp_Docs_Pk_Columns_Input = {
  ID: Scalars['Int'];
};

/** select columns of table "erp.Docs" */
export enum Erp_Docs_Select_Column {
  /** column name */
  FileName = 'FileName',
  /** column name */
  Id = 'ID',
  /** column name */
  Key = 'Key',
  /** column name */
  OrderId = 'OrderID',
  /** column name */
  Size = 'Size',
  /** column name */
  UploadingDate = 'UploadingDate'
}

/** input type for updating data in table "erp.Docs" */
export type Erp_Docs_Set_Input = {
  FileName?: InputMaybe<Scalars['String']>;
  ID?: InputMaybe<Scalars['Int']>;
  Key?: InputMaybe<Scalars['String']>;
  OrderID?: InputMaybe<Scalars['Int']>;
  Size?: InputMaybe<Scalars['Int']>;
  UploadingDate?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Erp_Docs_Stddev_Fields = {
  __typename?: 'erp_Docs_stddev_fields';
  ID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  Size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "erp.Docs" */
export type Erp_Docs_Stddev_Order_By = {
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  Size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Erp_Docs_Stddev_Pop_Fields = {
  __typename?: 'erp_Docs_stddev_pop_fields';
  ID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  Size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "erp.Docs" */
export type Erp_Docs_Stddev_Pop_Order_By = {
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  Size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Erp_Docs_Stddev_Samp_Fields = {
  __typename?: 'erp_Docs_stddev_samp_fields';
  ID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  Size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "erp.Docs" */
export type Erp_Docs_Stddev_Samp_Order_By = {
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  Size?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Erp_Docs_Sum_Fields = {
  __typename?: 'erp_Docs_sum_fields';
  ID?: Maybe<Scalars['Int']>;
  OrderID?: Maybe<Scalars['Int']>;
  Size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "erp.Docs" */
export type Erp_Docs_Sum_Order_By = {
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  Size?: InputMaybe<Order_By>;
};

/** update columns of table "erp.Docs" */
export enum Erp_Docs_Update_Column {
  /** column name */
  FileName = 'FileName',
  /** column name */
  Id = 'ID',
  /** column name */
  Key = 'Key',
  /** column name */
  OrderId = 'OrderID',
  /** column name */
  Size = 'Size',
  /** column name */
  UploadingDate = 'UploadingDate'
}

/** aggregate var_pop on columns */
export type Erp_Docs_Var_Pop_Fields = {
  __typename?: 'erp_Docs_var_pop_fields';
  ID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  Size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "erp.Docs" */
export type Erp_Docs_Var_Pop_Order_By = {
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  Size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Erp_Docs_Var_Samp_Fields = {
  __typename?: 'erp_Docs_var_samp_fields';
  ID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  Size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "erp.Docs" */
export type Erp_Docs_Var_Samp_Order_By = {
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  Size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Erp_Docs_Variance_Fields = {
  __typename?: 'erp_Docs_variance_fields';
  ID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  Size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "erp.Docs" */
export type Erp_Docs_Variance_Order_By = {
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  Size?: InputMaybe<Order_By>;
};

/** columns and relationships of "erp.Notifications" */
export type Erp_Notifications = {
  __typename?: 'erp_Notifications';
  /** An object relationship */
  Comment: Erp_Comments;
  CommentID: Scalars['Int'];
  ID: Scalars['Int'];
  MentionedUser?: Maybe<Scalars['Int']>;
  /** An object relationship */
  Order?: Maybe<Erp_Orders>;
  OrderID?: Maybe<Scalars['Int']>;
  /** An object relationship */
  User?: Maybe<Erp_Users>;
  Viewed: Scalars['Boolean'];
};

/** aggregated selection of "erp.Notifications" */
export type Erp_Notifications_Aggregate = {
  __typename?: 'erp_Notifications_aggregate';
  aggregate?: Maybe<Erp_Notifications_Aggregate_Fields>;
  nodes: Array<Erp_Notifications>;
};

/** aggregate fields of "erp.Notifications" */
export type Erp_Notifications_Aggregate_Fields = {
  __typename?: 'erp_Notifications_aggregate_fields';
  avg?: Maybe<Erp_Notifications_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Erp_Notifications_Max_Fields>;
  min?: Maybe<Erp_Notifications_Min_Fields>;
  stddev?: Maybe<Erp_Notifications_Stddev_Fields>;
  stddev_pop?: Maybe<Erp_Notifications_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Erp_Notifications_Stddev_Samp_Fields>;
  sum?: Maybe<Erp_Notifications_Sum_Fields>;
  var_pop?: Maybe<Erp_Notifications_Var_Pop_Fields>;
  var_samp?: Maybe<Erp_Notifications_Var_Samp_Fields>;
  variance?: Maybe<Erp_Notifications_Variance_Fields>;
};


/** aggregate fields of "erp.Notifications" */
export type Erp_Notifications_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Erp_Notifications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "erp.Notifications" */
export type Erp_Notifications_Aggregate_Order_By = {
  avg?: InputMaybe<Erp_Notifications_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Erp_Notifications_Max_Order_By>;
  min?: InputMaybe<Erp_Notifications_Min_Order_By>;
  stddev?: InputMaybe<Erp_Notifications_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Erp_Notifications_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Erp_Notifications_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Erp_Notifications_Sum_Order_By>;
  var_pop?: InputMaybe<Erp_Notifications_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Erp_Notifications_Var_Samp_Order_By>;
  variance?: InputMaybe<Erp_Notifications_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "erp.Notifications" */
export type Erp_Notifications_Arr_Rel_Insert_Input = {
  data: Array<Erp_Notifications_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Erp_Notifications_On_Conflict>;
};

/** aggregate avg on columns */
export type Erp_Notifications_Avg_Fields = {
  __typename?: 'erp_Notifications_avg_fields';
  CommentID?: Maybe<Scalars['Float']>;
  ID?: Maybe<Scalars['Float']>;
  MentionedUser?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "erp.Notifications" */
export type Erp_Notifications_Avg_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  MentionedUser?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "erp.Notifications". All fields are combined with a logical 'AND'. */
export type Erp_Notifications_Bool_Exp = {
  Comment?: InputMaybe<Erp_Comments_Bool_Exp>;
  CommentID?: InputMaybe<Int_Comparison_Exp>;
  ID?: InputMaybe<Int_Comparison_Exp>;
  MentionedUser?: InputMaybe<Int_Comparison_Exp>;
  Order?: InputMaybe<Erp_Orders_Bool_Exp>;
  OrderID?: InputMaybe<Int_Comparison_Exp>;
  User?: InputMaybe<Erp_Users_Bool_Exp>;
  Viewed?: InputMaybe<Boolean_Comparison_Exp>;
  _and?: InputMaybe<Array<Erp_Notifications_Bool_Exp>>;
  _not?: InputMaybe<Erp_Notifications_Bool_Exp>;
  _or?: InputMaybe<Array<Erp_Notifications_Bool_Exp>>;
};

/** unique or primary key constraints on table "erp.Notifications" */
export enum Erp_Notifications_Constraint {
  /** unique or primary key constraint */
  NotificationsPkey = 'Notifications_pkey'
}

/** input type for incrementing numeric columns in table "erp.Notifications" */
export type Erp_Notifications_Inc_Input = {
  CommentID?: InputMaybe<Scalars['Int']>;
  ID?: InputMaybe<Scalars['Int']>;
  MentionedUser?: InputMaybe<Scalars['Int']>;
  OrderID?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "erp.Notifications" */
export type Erp_Notifications_Insert_Input = {
  Comment?: InputMaybe<Erp_Comments_Obj_Rel_Insert_Input>;
  CommentID?: InputMaybe<Scalars['Int']>;
  ID?: InputMaybe<Scalars['Int']>;
  MentionedUser?: InputMaybe<Scalars['Int']>;
  Order?: InputMaybe<Erp_Orders_Obj_Rel_Insert_Input>;
  OrderID?: InputMaybe<Scalars['Int']>;
  User?: InputMaybe<Erp_Users_Obj_Rel_Insert_Input>;
  Viewed?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Erp_Notifications_Max_Fields = {
  __typename?: 'erp_Notifications_max_fields';
  CommentID?: Maybe<Scalars['Int']>;
  ID?: Maybe<Scalars['Int']>;
  MentionedUser?: Maybe<Scalars['Int']>;
  OrderID?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "erp.Notifications" */
export type Erp_Notifications_Max_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  MentionedUser?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Erp_Notifications_Min_Fields = {
  __typename?: 'erp_Notifications_min_fields';
  CommentID?: Maybe<Scalars['Int']>;
  ID?: Maybe<Scalars['Int']>;
  MentionedUser?: Maybe<Scalars['Int']>;
  OrderID?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "erp.Notifications" */
export type Erp_Notifications_Min_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  MentionedUser?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "erp.Notifications" */
export type Erp_Notifications_Mutation_Response = {
  __typename?: 'erp_Notifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Erp_Notifications>;
};

/** on conflict condition type for table "erp.Notifications" */
export type Erp_Notifications_On_Conflict = {
  constraint: Erp_Notifications_Constraint;
  update_columns?: Array<Erp_Notifications_Update_Column>;
  where?: InputMaybe<Erp_Notifications_Bool_Exp>;
};

/** Ordering options when selecting data from "erp.Notifications". */
export type Erp_Notifications_Order_By = {
  Comment?: InputMaybe<Erp_Comments_Order_By>;
  CommentID?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  MentionedUser?: InputMaybe<Order_By>;
  Order?: InputMaybe<Erp_Orders_Order_By>;
  OrderID?: InputMaybe<Order_By>;
  User?: InputMaybe<Erp_Users_Order_By>;
  Viewed?: InputMaybe<Order_By>;
};

/** primary key columns input for table: erp_Notifications */
export type Erp_Notifications_Pk_Columns_Input = {
  ID: Scalars['Int'];
};

/** select columns of table "erp.Notifications" */
export enum Erp_Notifications_Select_Column {
  /** column name */
  CommentId = 'CommentID',
  /** column name */
  Id = 'ID',
  /** column name */
  MentionedUser = 'MentionedUser',
  /** column name */
  OrderId = 'OrderID',
  /** column name */
  Viewed = 'Viewed'
}

/** input type for updating data in table "erp.Notifications" */
export type Erp_Notifications_Set_Input = {
  CommentID?: InputMaybe<Scalars['Int']>;
  ID?: InputMaybe<Scalars['Int']>;
  MentionedUser?: InputMaybe<Scalars['Int']>;
  OrderID?: InputMaybe<Scalars['Int']>;
  Viewed?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Erp_Notifications_Stddev_Fields = {
  __typename?: 'erp_Notifications_stddev_fields';
  CommentID?: Maybe<Scalars['Float']>;
  ID?: Maybe<Scalars['Float']>;
  MentionedUser?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "erp.Notifications" */
export type Erp_Notifications_Stddev_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  MentionedUser?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Erp_Notifications_Stddev_Pop_Fields = {
  __typename?: 'erp_Notifications_stddev_pop_fields';
  CommentID?: Maybe<Scalars['Float']>;
  ID?: Maybe<Scalars['Float']>;
  MentionedUser?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "erp.Notifications" */
export type Erp_Notifications_Stddev_Pop_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  MentionedUser?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Erp_Notifications_Stddev_Samp_Fields = {
  __typename?: 'erp_Notifications_stddev_samp_fields';
  CommentID?: Maybe<Scalars['Float']>;
  ID?: Maybe<Scalars['Float']>;
  MentionedUser?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "erp.Notifications" */
export type Erp_Notifications_Stddev_Samp_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  MentionedUser?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Erp_Notifications_Sum_Fields = {
  __typename?: 'erp_Notifications_sum_fields';
  CommentID?: Maybe<Scalars['Int']>;
  ID?: Maybe<Scalars['Int']>;
  MentionedUser?: Maybe<Scalars['Int']>;
  OrderID?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "erp.Notifications" */
export type Erp_Notifications_Sum_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  MentionedUser?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
};

/** update columns of table "erp.Notifications" */
export enum Erp_Notifications_Update_Column {
  /** column name */
  CommentId = 'CommentID',
  /** column name */
  Id = 'ID',
  /** column name */
  MentionedUser = 'MentionedUser',
  /** column name */
  OrderId = 'OrderID',
  /** column name */
  Viewed = 'Viewed'
}

/** aggregate var_pop on columns */
export type Erp_Notifications_Var_Pop_Fields = {
  __typename?: 'erp_Notifications_var_pop_fields';
  CommentID?: Maybe<Scalars['Float']>;
  ID?: Maybe<Scalars['Float']>;
  MentionedUser?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "erp.Notifications" */
export type Erp_Notifications_Var_Pop_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  MentionedUser?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Erp_Notifications_Var_Samp_Fields = {
  __typename?: 'erp_Notifications_var_samp_fields';
  CommentID?: Maybe<Scalars['Float']>;
  ID?: Maybe<Scalars['Float']>;
  MentionedUser?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "erp.Notifications" */
export type Erp_Notifications_Var_Samp_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  MentionedUser?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Erp_Notifications_Variance_Fields = {
  __typename?: 'erp_Notifications_variance_fields';
  CommentID?: Maybe<Scalars['Float']>;
  ID?: Maybe<Scalars['Float']>;
  MentionedUser?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "erp.Notifications" */
export type Erp_Notifications_Variance_Order_By = {
  CommentID?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  MentionedUser?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
};

/** columns and relationships of "erp.OrderItems" */
export type Erp_OrderItems = {
  __typename?: 'erp_OrderItems';
  Fitter?: Maybe<Scalars['String']>;
  FullName?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
  /** An object relationship */
  Order: Erp_Orders;
  OrderID: Scalars['Int'];
  OrderItemID: Scalars['Int'];
  Quantity: Scalars['Int'];
  SerialEnds?: Maybe<Scalars['String']>;
  SerialStarts?: Maybe<Scalars['String']>;
};

/** aggregated selection of "erp.OrderItems" */
export type Erp_OrderItems_Aggregate = {
  __typename?: 'erp_OrderItems_aggregate';
  aggregate?: Maybe<Erp_OrderItems_Aggregate_Fields>;
  nodes: Array<Erp_OrderItems>;
};

/** aggregate fields of "erp.OrderItems" */
export type Erp_OrderItems_Aggregate_Fields = {
  __typename?: 'erp_OrderItems_aggregate_fields';
  avg?: Maybe<Erp_OrderItems_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Erp_OrderItems_Max_Fields>;
  min?: Maybe<Erp_OrderItems_Min_Fields>;
  stddev?: Maybe<Erp_OrderItems_Stddev_Fields>;
  stddev_pop?: Maybe<Erp_OrderItems_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Erp_OrderItems_Stddev_Samp_Fields>;
  sum?: Maybe<Erp_OrderItems_Sum_Fields>;
  var_pop?: Maybe<Erp_OrderItems_Var_Pop_Fields>;
  var_samp?: Maybe<Erp_OrderItems_Var_Samp_Fields>;
  variance?: Maybe<Erp_OrderItems_Variance_Fields>;
};


/** aggregate fields of "erp.OrderItems" */
export type Erp_OrderItems_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Erp_OrderItems_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "erp.OrderItems" */
export type Erp_OrderItems_Aggregate_Order_By = {
  avg?: InputMaybe<Erp_OrderItems_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Erp_OrderItems_Max_Order_By>;
  min?: InputMaybe<Erp_OrderItems_Min_Order_By>;
  stddev?: InputMaybe<Erp_OrderItems_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Erp_OrderItems_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Erp_OrderItems_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Erp_OrderItems_Sum_Order_By>;
  var_pop?: InputMaybe<Erp_OrderItems_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Erp_OrderItems_Var_Samp_Order_By>;
  variance?: InputMaybe<Erp_OrderItems_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "erp.OrderItems" */
export type Erp_OrderItems_Arr_Rel_Insert_Input = {
  data: Array<Erp_OrderItems_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Erp_OrderItems_On_Conflict>;
};

/** aggregate avg on columns */
export type Erp_OrderItems_Avg_Fields = {
  __typename?: 'erp_OrderItems_avg_fields';
  OrderID?: Maybe<Scalars['Float']>;
  OrderItemID?: Maybe<Scalars['Float']>;
  Quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "erp.OrderItems" */
export type Erp_OrderItems_Avg_Order_By = {
  OrderID?: InputMaybe<Order_By>;
  OrderItemID?: InputMaybe<Order_By>;
  Quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "erp.OrderItems". All fields are combined with a logical 'AND'. */
export type Erp_OrderItems_Bool_Exp = {
  Fitter?: InputMaybe<String_Comparison_Exp>;
  FullName?: InputMaybe<String_Comparison_Exp>;
  Name?: InputMaybe<String_Comparison_Exp>;
  Order?: InputMaybe<Erp_Orders_Bool_Exp>;
  OrderID?: InputMaybe<Int_Comparison_Exp>;
  OrderItemID?: InputMaybe<Int_Comparison_Exp>;
  Quantity?: InputMaybe<Int_Comparison_Exp>;
  SerialEnds?: InputMaybe<String_Comparison_Exp>;
  SerialStarts?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Erp_OrderItems_Bool_Exp>>;
  _not?: InputMaybe<Erp_OrderItems_Bool_Exp>;
  _or?: InputMaybe<Array<Erp_OrderItems_Bool_Exp>>;
};

/** unique or primary key constraints on table "erp.OrderItems" */
export enum Erp_OrderItems_Constraint {
  /** unique or primary key constraint */
  OrderItemsPkey = 'OrderItems_pkey'
}

/** input type for incrementing numeric columns in table "erp.OrderItems" */
export type Erp_OrderItems_Inc_Input = {
  OrderID?: InputMaybe<Scalars['Int']>;
  OrderItemID?: InputMaybe<Scalars['Int']>;
  Quantity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "erp.OrderItems" */
export type Erp_OrderItems_Insert_Input = {
  Fitter?: InputMaybe<Scalars['String']>;
  FullName?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Order?: InputMaybe<Erp_Orders_Obj_Rel_Insert_Input>;
  OrderID?: InputMaybe<Scalars['Int']>;
  OrderItemID?: InputMaybe<Scalars['Int']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  SerialEnds?: InputMaybe<Scalars['String']>;
  SerialStarts?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Erp_OrderItems_Max_Fields = {
  __typename?: 'erp_OrderItems_max_fields';
  Fitter?: Maybe<Scalars['String']>;
  FullName?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  OrderID?: Maybe<Scalars['Int']>;
  OrderItemID?: Maybe<Scalars['Int']>;
  Quantity?: Maybe<Scalars['Int']>;
  SerialEnds?: Maybe<Scalars['String']>;
  SerialStarts?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "erp.OrderItems" */
export type Erp_OrderItems_Max_Order_By = {
  Fitter?: InputMaybe<Order_By>;
  FullName?: InputMaybe<Order_By>;
  Name?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  OrderItemID?: InputMaybe<Order_By>;
  Quantity?: InputMaybe<Order_By>;
  SerialEnds?: InputMaybe<Order_By>;
  SerialStarts?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Erp_OrderItems_Min_Fields = {
  __typename?: 'erp_OrderItems_min_fields';
  Fitter?: Maybe<Scalars['String']>;
  FullName?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  OrderID?: Maybe<Scalars['Int']>;
  OrderItemID?: Maybe<Scalars['Int']>;
  Quantity?: Maybe<Scalars['Int']>;
  SerialEnds?: Maybe<Scalars['String']>;
  SerialStarts?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "erp.OrderItems" */
export type Erp_OrderItems_Min_Order_By = {
  Fitter?: InputMaybe<Order_By>;
  FullName?: InputMaybe<Order_By>;
  Name?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  OrderItemID?: InputMaybe<Order_By>;
  Quantity?: InputMaybe<Order_By>;
  SerialEnds?: InputMaybe<Order_By>;
  SerialStarts?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "erp.OrderItems" */
export type Erp_OrderItems_Mutation_Response = {
  __typename?: 'erp_OrderItems_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Erp_OrderItems>;
};

/** on conflict condition type for table "erp.OrderItems" */
export type Erp_OrderItems_On_Conflict = {
  constraint: Erp_OrderItems_Constraint;
  update_columns?: Array<Erp_OrderItems_Update_Column>;
  where?: InputMaybe<Erp_OrderItems_Bool_Exp>;
};

/** Ordering options when selecting data from "erp.OrderItems". */
export type Erp_OrderItems_Order_By = {
  Fitter?: InputMaybe<Order_By>;
  FullName?: InputMaybe<Order_By>;
  Name?: InputMaybe<Order_By>;
  Order?: InputMaybe<Erp_Orders_Order_By>;
  OrderID?: InputMaybe<Order_By>;
  OrderItemID?: InputMaybe<Order_By>;
  Quantity?: InputMaybe<Order_By>;
  SerialEnds?: InputMaybe<Order_By>;
  SerialStarts?: InputMaybe<Order_By>;
};

/** primary key columns input for table: erp_OrderItems */
export type Erp_OrderItems_Pk_Columns_Input = {
  OrderItemID: Scalars['Int'];
};

/** select columns of table "erp.OrderItems" */
export enum Erp_OrderItems_Select_Column {
  /** column name */
  Fitter = 'Fitter',
  /** column name */
  FullName = 'FullName',
  /** column name */
  Name = 'Name',
  /** column name */
  OrderId = 'OrderID',
  /** column name */
  OrderItemId = 'OrderItemID',
  /** column name */
  Quantity = 'Quantity',
  /** column name */
  SerialEnds = 'SerialEnds',
  /** column name */
  SerialStarts = 'SerialStarts'
}

/** input type for updating data in table "erp.OrderItems" */
export type Erp_OrderItems_Set_Input = {
  Fitter?: InputMaybe<Scalars['String']>;
  FullName?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  OrderID?: InputMaybe<Scalars['Int']>;
  OrderItemID?: InputMaybe<Scalars['Int']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  SerialEnds?: InputMaybe<Scalars['String']>;
  SerialStarts?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Erp_OrderItems_Stddev_Fields = {
  __typename?: 'erp_OrderItems_stddev_fields';
  OrderID?: Maybe<Scalars['Float']>;
  OrderItemID?: Maybe<Scalars['Float']>;
  Quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "erp.OrderItems" */
export type Erp_OrderItems_Stddev_Order_By = {
  OrderID?: InputMaybe<Order_By>;
  OrderItemID?: InputMaybe<Order_By>;
  Quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Erp_OrderItems_Stddev_Pop_Fields = {
  __typename?: 'erp_OrderItems_stddev_pop_fields';
  OrderID?: Maybe<Scalars['Float']>;
  OrderItemID?: Maybe<Scalars['Float']>;
  Quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "erp.OrderItems" */
export type Erp_OrderItems_Stddev_Pop_Order_By = {
  OrderID?: InputMaybe<Order_By>;
  OrderItemID?: InputMaybe<Order_By>;
  Quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Erp_OrderItems_Stddev_Samp_Fields = {
  __typename?: 'erp_OrderItems_stddev_samp_fields';
  OrderID?: Maybe<Scalars['Float']>;
  OrderItemID?: Maybe<Scalars['Float']>;
  Quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "erp.OrderItems" */
export type Erp_OrderItems_Stddev_Samp_Order_By = {
  OrderID?: InputMaybe<Order_By>;
  OrderItemID?: InputMaybe<Order_By>;
  Quantity?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Erp_OrderItems_Sum_Fields = {
  __typename?: 'erp_OrderItems_sum_fields';
  OrderID?: Maybe<Scalars['Int']>;
  OrderItemID?: Maybe<Scalars['Int']>;
  Quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "erp.OrderItems" */
export type Erp_OrderItems_Sum_Order_By = {
  OrderID?: InputMaybe<Order_By>;
  OrderItemID?: InputMaybe<Order_By>;
  Quantity?: InputMaybe<Order_By>;
};

/** update columns of table "erp.OrderItems" */
export enum Erp_OrderItems_Update_Column {
  /** column name */
  Fitter = 'Fitter',
  /** column name */
  FullName = 'FullName',
  /** column name */
  Name = 'Name',
  /** column name */
  OrderId = 'OrderID',
  /** column name */
  OrderItemId = 'OrderItemID',
  /** column name */
  Quantity = 'Quantity',
  /** column name */
  SerialEnds = 'SerialEnds',
  /** column name */
  SerialStarts = 'SerialStarts'
}

/** aggregate var_pop on columns */
export type Erp_OrderItems_Var_Pop_Fields = {
  __typename?: 'erp_OrderItems_var_pop_fields';
  OrderID?: Maybe<Scalars['Float']>;
  OrderItemID?: Maybe<Scalars['Float']>;
  Quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "erp.OrderItems" */
export type Erp_OrderItems_Var_Pop_Order_By = {
  OrderID?: InputMaybe<Order_By>;
  OrderItemID?: InputMaybe<Order_By>;
  Quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Erp_OrderItems_Var_Samp_Fields = {
  __typename?: 'erp_OrderItems_var_samp_fields';
  OrderID?: Maybe<Scalars['Float']>;
  OrderItemID?: Maybe<Scalars['Float']>;
  Quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "erp.OrderItems" */
export type Erp_OrderItems_Var_Samp_Order_By = {
  OrderID?: InputMaybe<Order_By>;
  OrderItemID?: InputMaybe<Order_By>;
  Quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Erp_OrderItems_Variance_Fields = {
  __typename?: 'erp_OrderItems_variance_fields';
  OrderID?: Maybe<Scalars['Float']>;
  OrderItemID?: Maybe<Scalars['Float']>;
  Quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "erp.OrderItems" */
export type Erp_OrderItems_Variance_Order_By = {
  OrderID?: InputMaybe<Order_By>;
  OrderItemID?: InputMaybe<Order_By>;
  Quantity?: InputMaybe<Order_By>;
};

/** columns and relationships of "erp.OrderStatus" */
export type Erp_OrderStatus = {
  __typename?: 'erp_OrderStatus';
  ID: Scalars['Int'];
  Name: Scalars['String'];
  /** An array relationship */
  Orders: Array<Erp_Orders>;
  /** An aggregate relationship */
  Orders_aggregate: Erp_Orders_Aggregate;
};


/** columns and relationships of "erp.OrderStatus" */
export type Erp_OrderStatusOrdersArgs = {
  distinct_on?: InputMaybe<Array<Erp_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Orders_Order_By>>;
  where?: InputMaybe<Erp_Orders_Bool_Exp>;
};


/** columns and relationships of "erp.OrderStatus" */
export type Erp_OrderStatusOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Orders_Order_By>>;
  where?: InputMaybe<Erp_Orders_Bool_Exp>;
};

/** aggregated selection of "erp.OrderStatus" */
export type Erp_OrderStatus_Aggregate = {
  __typename?: 'erp_OrderStatus_aggregate';
  aggregate?: Maybe<Erp_OrderStatus_Aggregate_Fields>;
  nodes: Array<Erp_OrderStatus>;
};

/** aggregate fields of "erp.OrderStatus" */
export type Erp_OrderStatus_Aggregate_Fields = {
  __typename?: 'erp_OrderStatus_aggregate_fields';
  avg?: Maybe<Erp_OrderStatus_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Erp_OrderStatus_Max_Fields>;
  min?: Maybe<Erp_OrderStatus_Min_Fields>;
  stddev?: Maybe<Erp_OrderStatus_Stddev_Fields>;
  stddev_pop?: Maybe<Erp_OrderStatus_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Erp_OrderStatus_Stddev_Samp_Fields>;
  sum?: Maybe<Erp_OrderStatus_Sum_Fields>;
  var_pop?: Maybe<Erp_OrderStatus_Var_Pop_Fields>;
  var_samp?: Maybe<Erp_OrderStatus_Var_Samp_Fields>;
  variance?: Maybe<Erp_OrderStatus_Variance_Fields>;
};


/** aggregate fields of "erp.OrderStatus" */
export type Erp_OrderStatus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Erp_OrderStatus_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Erp_OrderStatus_Avg_Fields = {
  __typename?: 'erp_OrderStatus_avg_fields';
  ID?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "erp.OrderStatus". All fields are combined with a logical 'AND'. */
export type Erp_OrderStatus_Bool_Exp = {
  ID?: InputMaybe<Int_Comparison_Exp>;
  Name?: InputMaybe<String_Comparison_Exp>;
  Orders?: InputMaybe<Erp_Orders_Bool_Exp>;
  _and?: InputMaybe<Array<Erp_OrderStatus_Bool_Exp>>;
  _not?: InputMaybe<Erp_OrderStatus_Bool_Exp>;
  _or?: InputMaybe<Array<Erp_OrderStatus_Bool_Exp>>;
};

/** unique or primary key constraints on table "erp.OrderStatus" */
export enum Erp_OrderStatus_Constraint {
  /** unique or primary key constraint */
  OrderStatusPkey = 'OrderStatus_pkey'
}

/** input type for incrementing numeric columns in table "erp.OrderStatus" */
export type Erp_OrderStatus_Inc_Input = {
  ID?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "erp.OrderStatus" */
export type Erp_OrderStatus_Insert_Input = {
  ID?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
  Orders?: InputMaybe<Erp_Orders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Erp_OrderStatus_Max_Fields = {
  __typename?: 'erp_OrderStatus_max_fields';
  ID?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Erp_OrderStatus_Min_Fields = {
  __typename?: 'erp_OrderStatus_min_fields';
  ID?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "erp.OrderStatus" */
export type Erp_OrderStatus_Mutation_Response = {
  __typename?: 'erp_OrderStatus_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Erp_OrderStatus>;
};

/** input type for inserting object relation for remote table "erp.OrderStatus" */
export type Erp_OrderStatus_Obj_Rel_Insert_Input = {
  data: Erp_OrderStatus_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Erp_OrderStatus_On_Conflict>;
};

/** on conflict condition type for table "erp.OrderStatus" */
export type Erp_OrderStatus_On_Conflict = {
  constraint: Erp_OrderStatus_Constraint;
  update_columns?: Array<Erp_OrderStatus_Update_Column>;
  where?: InputMaybe<Erp_OrderStatus_Bool_Exp>;
};

/** Ordering options when selecting data from "erp.OrderStatus". */
export type Erp_OrderStatus_Order_By = {
  ID?: InputMaybe<Order_By>;
  Name?: InputMaybe<Order_By>;
  Orders_aggregate?: InputMaybe<Erp_Orders_Aggregate_Order_By>;
};

/** primary key columns input for table: erp_OrderStatus */
export type Erp_OrderStatus_Pk_Columns_Input = {
  ID: Scalars['Int'];
};

/** select columns of table "erp.OrderStatus" */
export enum Erp_OrderStatus_Select_Column {
  /** column name */
  Id = 'ID',
  /** column name */
  Name = 'Name'
}

/** input type for updating data in table "erp.OrderStatus" */
export type Erp_OrderStatus_Set_Input = {
  ID?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Erp_OrderStatus_Stddev_Fields = {
  __typename?: 'erp_OrderStatus_stddev_fields';
  ID?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Erp_OrderStatus_Stddev_Pop_Fields = {
  __typename?: 'erp_OrderStatus_stddev_pop_fields';
  ID?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Erp_OrderStatus_Stddev_Samp_Fields = {
  __typename?: 'erp_OrderStatus_stddev_samp_fields';
  ID?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Erp_OrderStatus_Sum_Fields = {
  __typename?: 'erp_OrderStatus_sum_fields';
  ID?: Maybe<Scalars['Int']>;
};

/** update columns of table "erp.OrderStatus" */
export enum Erp_OrderStatus_Update_Column {
  /** column name */
  Id = 'ID',
  /** column name */
  Name = 'Name'
}

/** aggregate var_pop on columns */
export type Erp_OrderStatus_Var_Pop_Fields = {
  __typename?: 'erp_OrderStatus_var_pop_fields';
  ID?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Erp_OrderStatus_Var_Samp_Fields = {
  __typename?: 'erp_OrderStatus_var_samp_fields';
  ID?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Erp_OrderStatus_Variance_Fields = {
  __typename?: 'erp_OrderStatus_variance_fields';
  ID?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "erp.Orders" */
export type Erp_Orders = {
  __typename?: 'erp_Orders';
  AcceptanceDate?: Maybe<Scalars['timestamp']>;
  ActualShippingDate?: Maybe<Scalars['timestamp']>;
  AwaitingDispatch: Scalars['Boolean'];
  CheckListTPLID?: Maybe<Scalars['Int']>;
  City?: Maybe<Scalars['String']>;
  Comment?: Maybe<Scalars['String']>;
  /** An array relationship */
  Comments: Array<Erp_Comments>;
  /** An aggregate relationship */
  Comments_aggregate: Erp_Comments_Aggregate;
  CreatingDate: Scalars['timestamp'];
  /** An array relationship */
  Docs: Array<Erp_Docs>;
  /** An aggregate relationship */
  Docs_aggregate: Erp_Docs_Aggregate;
  Entity?: Maybe<Scalars['String']>;
  InvoiceNumber?: Maybe<Scalars['String']>;
  IsReclamation?: Maybe<Scalars['Boolean']>;
  ManagerID?: Maybe<Scalars['Int']>;
  NeedAttention?: Maybe<Scalars['String']>;
  /** An array relationship */
  Notifications: Array<Erp_Notifications>;
  /** An aggregate relationship */
  Notifications_aggregate: Erp_Notifications_Aggregate;
  OrderID: Scalars['Int'];
  /** An array relationship */
  OrderItems: Array<Erp_OrderItems>;
  /** An aggregate relationship */
  OrderItems_aggregate: Erp_OrderItems_Aggregate;
  OrderNumber?: Maybe<Scalars['String']>;
  /** An object relationship */
  OrderStatus: Erp_OrderStatus;
  OrderStatusID: Scalars['Int'];
  PaidAmount?: Maybe<Scalars['numeric']>;
  /** An array relationship */
  PaymentHistories: Array<Erp_PaymentHistory>;
  /** An aggregate relationship */
  PaymentHistories_aggregate: Erp_PaymentHistory_Aggregate;
  ShippingDate?: Maybe<Scalars['date']>;
  TotalAmount?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  User?: Maybe<Erp_Users>;
};


/** columns and relationships of "erp.Orders" */
export type Erp_OrdersCommentsArgs = {
  distinct_on?: InputMaybe<Array<Erp_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Comments_Order_By>>;
  where?: InputMaybe<Erp_Comments_Bool_Exp>;
};


/** columns and relationships of "erp.Orders" */
export type Erp_OrdersComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Comments_Order_By>>;
  where?: InputMaybe<Erp_Comments_Bool_Exp>;
};


/** columns and relationships of "erp.Orders" */
export type Erp_OrdersDocsArgs = {
  distinct_on?: InputMaybe<Array<Erp_Docs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Docs_Order_By>>;
  where?: InputMaybe<Erp_Docs_Bool_Exp>;
};


/** columns and relationships of "erp.Orders" */
export type Erp_OrdersDocs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Docs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Docs_Order_By>>;
  where?: InputMaybe<Erp_Docs_Bool_Exp>;
};


/** columns and relationships of "erp.Orders" */
export type Erp_OrdersNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Erp_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Notifications_Order_By>>;
  where?: InputMaybe<Erp_Notifications_Bool_Exp>;
};


/** columns and relationships of "erp.Orders" */
export type Erp_OrdersNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Notifications_Order_By>>;
  where?: InputMaybe<Erp_Notifications_Bool_Exp>;
};


/** columns and relationships of "erp.Orders" */
export type Erp_OrdersOrderItemsArgs = {
  distinct_on?: InputMaybe<Array<Erp_OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_OrderItems_Order_By>>;
  where?: InputMaybe<Erp_OrderItems_Bool_Exp>;
};


/** columns and relationships of "erp.Orders" */
export type Erp_OrdersOrderItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_OrderItems_Order_By>>;
  where?: InputMaybe<Erp_OrderItems_Bool_Exp>;
};


/** columns and relationships of "erp.Orders" */
export type Erp_OrdersPaymentHistoriesArgs = {
  distinct_on?: InputMaybe<Array<Erp_PaymentHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_PaymentHistory_Order_By>>;
  where?: InputMaybe<Erp_PaymentHistory_Bool_Exp>;
};


/** columns and relationships of "erp.Orders" */
export type Erp_OrdersPaymentHistories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_PaymentHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_PaymentHistory_Order_By>>;
  where?: InputMaybe<Erp_PaymentHistory_Bool_Exp>;
};

/** aggregated selection of "erp.Orders" */
export type Erp_Orders_Aggregate = {
  __typename?: 'erp_Orders_aggregate';
  aggregate?: Maybe<Erp_Orders_Aggregate_Fields>;
  nodes: Array<Erp_Orders>;
};

/** aggregate fields of "erp.Orders" */
export type Erp_Orders_Aggregate_Fields = {
  __typename?: 'erp_Orders_aggregate_fields';
  avg?: Maybe<Erp_Orders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Erp_Orders_Max_Fields>;
  min?: Maybe<Erp_Orders_Min_Fields>;
  stddev?: Maybe<Erp_Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Erp_Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Erp_Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Erp_Orders_Sum_Fields>;
  var_pop?: Maybe<Erp_Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Erp_Orders_Var_Samp_Fields>;
  variance?: Maybe<Erp_Orders_Variance_Fields>;
};


/** aggregate fields of "erp.Orders" */
export type Erp_Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Erp_Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "erp.Orders" */
export type Erp_Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Erp_Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Erp_Orders_Max_Order_By>;
  min?: InputMaybe<Erp_Orders_Min_Order_By>;
  stddev?: InputMaybe<Erp_Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Erp_Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Erp_Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Erp_Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Erp_Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Erp_Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Erp_Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "erp.Orders" */
export type Erp_Orders_Arr_Rel_Insert_Input = {
  data: Array<Erp_Orders_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Erp_Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Erp_Orders_Avg_Fields = {
  __typename?: 'erp_Orders_avg_fields';
  CheckListTPLID?: Maybe<Scalars['Float']>;
  ManagerID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  OrderStatusID?: Maybe<Scalars['Float']>;
  PaidAmount?: Maybe<Scalars['Float']>;
  TotalAmount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "erp.Orders" */
export type Erp_Orders_Avg_Order_By = {
  CheckListTPLID?: InputMaybe<Order_By>;
  ManagerID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  OrderStatusID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
  TotalAmount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "erp.Orders". All fields are combined with a logical 'AND'. */
export type Erp_Orders_Bool_Exp = {
  AcceptanceDate?: InputMaybe<Timestamp_Comparison_Exp>;
  ActualShippingDate?: InputMaybe<Timestamp_Comparison_Exp>;
  AwaitingDispatch?: InputMaybe<Boolean_Comparison_Exp>;
  CheckListTPLID?: InputMaybe<Int_Comparison_Exp>;
  City?: InputMaybe<String_Comparison_Exp>;
  Comment?: InputMaybe<String_Comparison_Exp>;
  Comments?: InputMaybe<Erp_Comments_Bool_Exp>;
  CreatingDate?: InputMaybe<Timestamp_Comparison_Exp>;
  Docs?: InputMaybe<Erp_Docs_Bool_Exp>;
  Entity?: InputMaybe<String_Comparison_Exp>;
  InvoiceNumber?: InputMaybe<String_Comparison_Exp>;
  IsReclamation?: InputMaybe<Boolean_Comparison_Exp>;
  ManagerID?: InputMaybe<Int_Comparison_Exp>;
  NeedAttention?: InputMaybe<String_Comparison_Exp>;
  Notifications?: InputMaybe<Erp_Notifications_Bool_Exp>;
  OrderID?: InputMaybe<Int_Comparison_Exp>;
  OrderItems?: InputMaybe<Erp_OrderItems_Bool_Exp>;
  OrderNumber?: InputMaybe<String_Comparison_Exp>;
  OrderStatus?: InputMaybe<Erp_OrderStatus_Bool_Exp>;
  OrderStatusID?: InputMaybe<Int_Comparison_Exp>;
  PaidAmount?: InputMaybe<Numeric_Comparison_Exp>;
  PaymentHistories?: InputMaybe<Erp_PaymentHistory_Bool_Exp>;
  ShippingDate?: InputMaybe<Date_Comparison_Exp>;
  TotalAmount?: InputMaybe<Numeric_Comparison_Exp>;
  User?: InputMaybe<Erp_Users_Bool_Exp>;
  _and?: InputMaybe<Array<Erp_Orders_Bool_Exp>>;
  _not?: InputMaybe<Erp_Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Erp_Orders_Bool_Exp>>;
};

/** unique or primary key constraints on table "erp.Orders" */
export enum Erp_Orders_Constraint {
  /** unique or primary key constraint */
  OrdersPkey = 'Orders_pkey'
}

/** input type for incrementing numeric columns in table "erp.Orders" */
export type Erp_Orders_Inc_Input = {
  CheckListTPLID?: InputMaybe<Scalars['Int']>;
  ManagerID?: InputMaybe<Scalars['Int']>;
  OrderID?: InputMaybe<Scalars['Int']>;
  OrderStatusID?: InputMaybe<Scalars['Int']>;
  PaidAmount?: InputMaybe<Scalars['numeric']>;
  TotalAmount?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "erp.Orders" */
export type Erp_Orders_Insert_Input = {
  AcceptanceDate?: InputMaybe<Scalars['timestamp']>;
  ActualShippingDate?: InputMaybe<Scalars['timestamp']>;
  AwaitingDispatch?: InputMaybe<Scalars['Boolean']>;
  CheckListTPLID?: InputMaybe<Scalars['Int']>;
  City?: InputMaybe<Scalars['String']>;
  Comment?: InputMaybe<Scalars['String']>;
  Comments?: InputMaybe<Erp_Comments_Arr_Rel_Insert_Input>;
  CreatingDate?: InputMaybe<Scalars['timestamp']>;
  Docs?: InputMaybe<Erp_Docs_Arr_Rel_Insert_Input>;
  Entity?: InputMaybe<Scalars['String']>;
  InvoiceNumber?: InputMaybe<Scalars['String']>;
  IsReclamation?: InputMaybe<Scalars['Boolean']>;
  ManagerID?: InputMaybe<Scalars['Int']>;
  NeedAttention?: InputMaybe<Scalars['String']>;
  Notifications?: InputMaybe<Erp_Notifications_Arr_Rel_Insert_Input>;
  OrderID?: InputMaybe<Scalars['Int']>;
  OrderItems?: InputMaybe<Erp_OrderItems_Arr_Rel_Insert_Input>;
  OrderNumber?: InputMaybe<Scalars['String']>;
  OrderStatus?: InputMaybe<Erp_OrderStatus_Obj_Rel_Insert_Input>;
  OrderStatusID?: InputMaybe<Scalars['Int']>;
  PaidAmount?: InputMaybe<Scalars['numeric']>;
  PaymentHistories?: InputMaybe<Erp_PaymentHistory_Arr_Rel_Insert_Input>;
  ShippingDate?: InputMaybe<Scalars['date']>;
  TotalAmount?: InputMaybe<Scalars['numeric']>;
  User?: InputMaybe<Erp_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Erp_Orders_Max_Fields = {
  __typename?: 'erp_Orders_max_fields';
  AcceptanceDate?: Maybe<Scalars['timestamp']>;
  ActualShippingDate?: Maybe<Scalars['timestamp']>;
  CheckListTPLID?: Maybe<Scalars['Int']>;
  City?: Maybe<Scalars['String']>;
  Comment?: Maybe<Scalars['String']>;
  CreatingDate?: Maybe<Scalars['timestamp']>;
  Entity?: Maybe<Scalars['String']>;
  InvoiceNumber?: Maybe<Scalars['String']>;
  ManagerID?: Maybe<Scalars['Int']>;
  NeedAttention?: Maybe<Scalars['String']>;
  OrderID?: Maybe<Scalars['Int']>;
  OrderNumber?: Maybe<Scalars['String']>;
  OrderStatusID?: Maybe<Scalars['Int']>;
  PaidAmount?: Maybe<Scalars['numeric']>;
  ShippingDate?: Maybe<Scalars['date']>;
  TotalAmount?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "erp.Orders" */
export type Erp_Orders_Max_Order_By = {
  AcceptanceDate?: InputMaybe<Order_By>;
  ActualShippingDate?: InputMaybe<Order_By>;
  CheckListTPLID?: InputMaybe<Order_By>;
  City?: InputMaybe<Order_By>;
  Comment?: InputMaybe<Order_By>;
  CreatingDate?: InputMaybe<Order_By>;
  Entity?: InputMaybe<Order_By>;
  InvoiceNumber?: InputMaybe<Order_By>;
  ManagerID?: InputMaybe<Order_By>;
  NeedAttention?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  OrderNumber?: InputMaybe<Order_By>;
  OrderStatusID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
  ShippingDate?: InputMaybe<Order_By>;
  TotalAmount?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Erp_Orders_Min_Fields = {
  __typename?: 'erp_Orders_min_fields';
  AcceptanceDate?: Maybe<Scalars['timestamp']>;
  ActualShippingDate?: Maybe<Scalars['timestamp']>;
  CheckListTPLID?: Maybe<Scalars['Int']>;
  City?: Maybe<Scalars['String']>;
  Comment?: Maybe<Scalars['String']>;
  CreatingDate?: Maybe<Scalars['timestamp']>;
  Entity?: Maybe<Scalars['String']>;
  InvoiceNumber?: Maybe<Scalars['String']>;
  ManagerID?: Maybe<Scalars['Int']>;
  NeedAttention?: Maybe<Scalars['String']>;
  OrderID?: Maybe<Scalars['Int']>;
  OrderNumber?: Maybe<Scalars['String']>;
  OrderStatusID?: Maybe<Scalars['Int']>;
  PaidAmount?: Maybe<Scalars['numeric']>;
  ShippingDate?: Maybe<Scalars['date']>;
  TotalAmount?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "erp.Orders" */
export type Erp_Orders_Min_Order_By = {
  AcceptanceDate?: InputMaybe<Order_By>;
  ActualShippingDate?: InputMaybe<Order_By>;
  CheckListTPLID?: InputMaybe<Order_By>;
  City?: InputMaybe<Order_By>;
  Comment?: InputMaybe<Order_By>;
  CreatingDate?: InputMaybe<Order_By>;
  Entity?: InputMaybe<Order_By>;
  InvoiceNumber?: InputMaybe<Order_By>;
  ManagerID?: InputMaybe<Order_By>;
  NeedAttention?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  OrderNumber?: InputMaybe<Order_By>;
  OrderStatusID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
  ShippingDate?: InputMaybe<Order_By>;
  TotalAmount?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "erp.Orders" */
export type Erp_Orders_Mutation_Response = {
  __typename?: 'erp_Orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Erp_Orders>;
};

/** input type for inserting object relation for remote table "erp.Orders" */
export type Erp_Orders_Obj_Rel_Insert_Input = {
  data: Erp_Orders_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Erp_Orders_On_Conflict>;
};

/** on conflict condition type for table "erp.Orders" */
export type Erp_Orders_On_Conflict = {
  constraint: Erp_Orders_Constraint;
  update_columns?: Array<Erp_Orders_Update_Column>;
  where?: InputMaybe<Erp_Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "erp.Orders". */
export type Erp_Orders_Order_By = {
  AcceptanceDate?: InputMaybe<Order_By>;
  ActualShippingDate?: InputMaybe<Order_By>;
  AwaitingDispatch?: InputMaybe<Order_By>;
  CheckListTPLID?: InputMaybe<Order_By>;
  City?: InputMaybe<Order_By>;
  Comment?: InputMaybe<Order_By>;
  Comments_aggregate?: InputMaybe<Erp_Comments_Aggregate_Order_By>;
  CreatingDate?: InputMaybe<Order_By>;
  Docs_aggregate?: InputMaybe<Erp_Docs_Aggregate_Order_By>;
  Entity?: InputMaybe<Order_By>;
  InvoiceNumber?: InputMaybe<Order_By>;
  IsReclamation?: InputMaybe<Order_By>;
  ManagerID?: InputMaybe<Order_By>;
  NeedAttention?: InputMaybe<Order_By>;
  Notifications_aggregate?: InputMaybe<Erp_Notifications_Aggregate_Order_By>;
  OrderID?: InputMaybe<Order_By>;
  OrderItems_aggregate?: InputMaybe<Erp_OrderItems_Aggregate_Order_By>;
  OrderNumber?: InputMaybe<Order_By>;
  OrderStatus?: InputMaybe<Erp_OrderStatus_Order_By>;
  OrderStatusID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
  PaymentHistories_aggregate?: InputMaybe<Erp_PaymentHistory_Aggregate_Order_By>;
  ShippingDate?: InputMaybe<Order_By>;
  TotalAmount?: InputMaybe<Order_By>;
  User?: InputMaybe<Erp_Users_Order_By>;
};

/** primary key columns input for table: erp_Orders */
export type Erp_Orders_Pk_Columns_Input = {
  OrderID: Scalars['Int'];
};

/** select columns of table "erp.Orders" */
export enum Erp_Orders_Select_Column {
  /** column name */
  AcceptanceDate = 'AcceptanceDate',
  /** column name */
  ActualShippingDate = 'ActualShippingDate',
  /** column name */
  AwaitingDispatch = 'AwaitingDispatch',
  /** column name */
  CheckListTplid = 'CheckListTPLID',
  /** column name */
  City = 'City',
  /** column name */
  Comment = 'Comment',
  /** column name */
  CreatingDate = 'CreatingDate',
  /** column name */
  Entity = 'Entity',
  /** column name */
  InvoiceNumber = 'InvoiceNumber',
  /** column name */
  IsReclamation = 'IsReclamation',
  /** column name */
  ManagerId = 'ManagerID',
  /** column name */
  NeedAttention = 'NeedAttention',
  /** column name */
  OrderId = 'OrderID',
  /** column name */
  OrderNumber = 'OrderNumber',
  /** column name */
  OrderStatusId = 'OrderStatusID',
  /** column name */
  PaidAmount = 'PaidAmount',
  /** column name */
  ShippingDate = 'ShippingDate',
  /** column name */
  TotalAmount = 'TotalAmount'
}

/** input type for updating data in table "erp.Orders" */
export type Erp_Orders_Set_Input = {
  AcceptanceDate?: InputMaybe<Scalars['timestamp']>;
  ActualShippingDate?: InputMaybe<Scalars['timestamp']>;
  AwaitingDispatch?: InputMaybe<Scalars['Boolean']>;
  CheckListTPLID?: InputMaybe<Scalars['Int']>;
  City?: InputMaybe<Scalars['String']>;
  Comment?: InputMaybe<Scalars['String']>;
  CreatingDate?: InputMaybe<Scalars['timestamp']>;
  Entity?: InputMaybe<Scalars['String']>;
  InvoiceNumber?: InputMaybe<Scalars['String']>;
  IsReclamation?: InputMaybe<Scalars['Boolean']>;
  ManagerID?: InputMaybe<Scalars['Int']>;
  NeedAttention?: InputMaybe<Scalars['String']>;
  OrderID?: InputMaybe<Scalars['Int']>;
  OrderNumber?: InputMaybe<Scalars['String']>;
  OrderStatusID?: InputMaybe<Scalars['Int']>;
  PaidAmount?: InputMaybe<Scalars['numeric']>;
  ShippingDate?: InputMaybe<Scalars['date']>;
  TotalAmount?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Erp_Orders_Stddev_Fields = {
  __typename?: 'erp_Orders_stddev_fields';
  CheckListTPLID?: Maybe<Scalars['Float']>;
  ManagerID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  OrderStatusID?: Maybe<Scalars['Float']>;
  PaidAmount?: Maybe<Scalars['Float']>;
  TotalAmount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "erp.Orders" */
export type Erp_Orders_Stddev_Order_By = {
  CheckListTPLID?: InputMaybe<Order_By>;
  ManagerID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  OrderStatusID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
  TotalAmount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Erp_Orders_Stddev_Pop_Fields = {
  __typename?: 'erp_Orders_stddev_pop_fields';
  CheckListTPLID?: Maybe<Scalars['Float']>;
  ManagerID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  OrderStatusID?: Maybe<Scalars['Float']>;
  PaidAmount?: Maybe<Scalars['Float']>;
  TotalAmount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "erp.Orders" */
export type Erp_Orders_Stddev_Pop_Order_By = {
  CheckListTPLID?: InputMaybe<Order_By>;
  ManagerID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  OrderStatusID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
  TotalAmount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Erp_Orders_Stddev_Samp_Fields = {
  __typename?: 'erp_Orders_stddev_samp_fields';
  CheckListTPLID?: Maybe<Scalars['Float']>;
  ManagerID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  OrderStatusID?: Maybe<Scalars['Float']>;
  PaidAmount?: Maybe<Scalars['Float']>;
  TotalAmount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "erp.Orders" */
export type Erp_Orders_Stddev_Samp_Order_By = {
  CheckListTPLID?: InputMaybe<Order_By>;
  ManagerID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  OrderStatusID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
  TotalAmount?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Erp_Orders_Sum_Fields = {
  __typename?: 'erp_Orders_sum_fields';
  CheckListTPLID?: Maybe<Scalars['Int']>;
  ManagerID?: Maybe<Scalars['Int']>;
  OrderID?: Maybe<Scalars['Int']>;
  OrderStatusID?: Maybe<Scalars['Int']>;
  PaidAmount?: Maybe<Scalars['numeric']>;
  TotalAmount?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "erp.Orders" */
export type Erp_Orders_Sum_Order_By = {
  CheckListTPLID?: InputMaybe<Order_By>;
  ManagerID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  OrderStatusID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
  TotalAmount?: InputMaybe<Order_By>;
};

/** update columns of table "erp.Orders" */
export enum Erp_Orders_Update_Column {
  /** column name */
  AcceptanceDate = 'AcceptanceDate',
  /** column name */
  ActualShippingDate = 'ActualShippingDate',
  /** column name */
  AwaitingDispatch = 'AwaitingDispatch',
  /** column name */
  CheckListTplid = 'CheckListTPLID',
  /** column name */
  City = 'City',
  /** column name */
  Comment = 'Comment',
  /** column name */
  CreatingDate = 'CreatingDate',
  /** column name */
  Entity = 'Entity',
  /** column name */
  InvoiceNumber = 'InvoiceNumber',
  /** column name */
  IsReclamation = 'IsReclamation',
  /** column name */
  ManagerId = 'ManagerID',
  /** column name */
  NeedAttention = 'NeedAttention',
  /** column name */
  OrderId = 'OrderID',
  /** column name */
  OrderNumber = 'OrderNumber',
  /** column name */
  OrderStatusId = 'OrderStatusID',
  /** column name */
  PaidAmount = 'PaidAmount',
  /** column name */
  ShippingDate = 'ShippingDate',
  /** column name */
  TotalAmount = 'TotalAmount'
}

/** aggregate var_pop on columns */
export type Erp_Orders_Var_Pop_Fields = {
  __typename?: 'erp_Orders_var_pop_fields';
  CheckListTPLID?: Maybe<Scalars['Float']>;
  ManagerID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  OrderStatusID?: Maybe<Scalars['Float']>;
  PaidAmount?: Maybe<Scalars['Float']>;
  TotalAmount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "erp.Orders" */
export type Erp_Orders_Var_Pop_Order_By = {
  CheckListTPLID?: InputMaybe<Order_By>;
  ManagerID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  OrderStatusID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
  TotalAmount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Erp_Orders_Var_Samp_Fields = {
  __typename?: 'erp_Orders_var_samp_fields';
  CheckListTPLID?: Maybe<Scalars['Float']>;
  ManagerID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  OrderStatusID?: Maybe<Scalars['Float']>;
  PaidAmount?: Maybe<Scalars['Float']>;
  TotalAmount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "erp.Orders" */
export type Erp_Orders_Var_Samp_Order_By = {
  CheckListTPLID?: InputMaybe<Order_By>;
  ManagerID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  OrderStatusID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
  TotalAmount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Erp_Orders_Variance_Fields = {
  __typename?: 'erp_Orders_variance_fields';
  CheckListTPLID?: Maybe<Scalars['Float']>;
  ManagerID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  OrderStatusID?: Maybe<Scalars['Float']>;
  PaidAmount?: Maybe<Scalars['Float']>;
  TotalAmount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "erp.Orders" */
export type Erp_Orders_Variance_Order_By = {
  CheckListTPLID?: InputMaybe<Order_By>;
  ManagerID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  OrderStatusID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
  TotalAmount?: InputMaybe<Order_By>;
};

/** columns and relationships of "erp.PaymentHistory" */
export type Erp_PaymentHistory = {
  __typename?: 'erp_PaymentHistory';
  Date: Scalars['timestamp'];
  ID: Scalars['Int'];
  /** An object relationship */
  Order: Erp_Orders;
  OrderID: Scalars['Int'];
  PaidAmount: Scalars['numeric'];
};

/** aggregated selection of "erp.PaymentHistory" */
export type Erp_PaymentHistory_Aggregate = {
  __typename?: 'erp_PaymentHistory_aggregate';
  aggregate?: Maybe<Erp_PaymentHistory_Aggregate_Fields>;
  nodes: Array<Erp_PaymentHistory>;
};

/** aggregate fields of "erp.PaymentHistory" */
export type Erp_PaymentHistory_Aggregate_Fields = {
  __typename?: 'erp_PaymentHistory_aggregate_fields';
  avg?: Maybe<Erp_PaymentHistory_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Erp_PaymentHistory_Max_Fields>;
  min?: Maybe<Erp_PaymentHistory_Min_Fields>;
  stddev?: Maybe<Erp_PaymentHistory_Stddev_Fields>;
  stddev_pop?: Maybe<Erp_PaymentHistory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Erp_PaymentHistory_Stddev_Samp_Fields>;
  sum?: Maybe<Erp_PaymentHistory_Sum_Fields>;
  var_pop?: Maybe<Erp_PaymentHistory_Var_Pop_Fields>;
  var_samp?: Maybe<Erp_PaymentHistory_Var_Samp_Fields>;
  variance?: Maybe<Erp_PaymentHistory_Variance_Fields>;
};


/** aggregate fields of "erp.PaymentHistory" */
export type Erp_PaymentHistory_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Erp_PaymentHistory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "erp.PaymentHistory" */
export type Erp_PaymentHistory_Aggregate_Order_By = {
  avg?: InputMaybe<Erp_PaymentHistory_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Erp_PaymentHistory_Max_Order_By>;
  min?: InputMaybe<Erp_PaymentHistory_Min_Order_By>;
  stddev?: InputMaybe<Erp_PaymentHistory_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Erp_PaymentHistory_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Erp_PaymentHistory_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Erp_PaymentHistory_Sum_Order_By>;
  var_pop?: InputMaybe<Erp_PaymentHistory_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Erp_PaymentHistory_Var_Samp_Order_By>;
  variance?: InputMaybe<Erp_PaymentHistory_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "erp.PaymentHistory" */
export type Erp_PaymentHistory_Arr_Rel_Insert_Input = {
  data: Array<Erp_PaymentHistory_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Erp_PaymentHistory_On_Conflict>;
};

/** aggregate avg on columns */
export type Erp_PaymentHistory_Avg_Fields = {
  __typename?: 'erp_PaymentHistory_avg_fields';
  ID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  PaidAmount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "erp.PaymentHistory" */
export type Erp_PaymentHistory_Avg_Order_By = {
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "erp.PaymentHistory". All fields are combined with a logical 'AND'. */
export type Erp_PaymentHistory_Bool_Exp = {
  Date?: InputMaybe<Timestamp_Comparison_Exp>;
  ID?: InputMaybe<Int_Comparison_Exp>;
  Order?: InputMaybe<Erp_Orders_Bool_Exp>;
  OrderID?: InputMaybe<Int_Comparison_Exp>;
  PaidAmount?: InputMaybe<Numeric_Comparison_Exp>;
  _and?: InputMaybe<Array<Erp_PaymentHistory_Bool_Exp>>;
  _not?: InputMaybe<Erp_PaymentHistory_Bool_Exp>;
  _or?: InputMaybe<Array<Erp_PaymentHistory_Bool_Exp>>;
};

/** unique or primary key constraints on table "erp.PaymentHistory" */
export enum Erp_PaymentHistory_Constraint {
  /** unique or primary key constraint */
  PaymentHistoryIdKey = 'PaymentHistory_id_key',
  /** unique or primary key constraint */
  PaymentHistoryPkey = 'PaymentHistory_pkey'
}

/** input type for incrementing numeric columns in table "erp.PaymentHistory" */
export type Erp_PaymentHistory_Inc_Input = {
  ID?: InputMaybe<Scalars['Int']>;
  OrderID?: InputMaybe<Scalars['Int']>;
  PaidAmount?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "erp.PaymentHistory" */
export type Erp_PaymentHistory_Insert_Input = {
  Date?: InputMaybe<Scalars['timestamp']>;
  ID?: InputMaybe<Scalars['Int']>;
  Order?: InputMaybe<Erp_Orders_Obj_Rel_Insert_Input>;
  OrderID?: InputMaybe<Scalars['Int']>;
  PaidAmount?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Erp_PaymentHistory_Max_Fields = {
  __typename?: 'erp_PaymentHistory_max_fields';
  Date?: Maybe<Scalars['timestamp']>;
  ID?: Maybe<Scalars['Int']>;
  OrderID?: Maybe<Scalars['Int']>;
  PaidAmount?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "erp.PaymentHistory" */
export type Erp_PaymentHistory_Max_Order_By = {
  Date?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Erp_PaymentHistory_Min_Fields = {
  __typename?: 'erp_PaymentHistory_min_fields';
  Date?: Maybe<Scalars['timestamp']>;
  ID?: Maybe<Scalars['Int']>;
  OrderID?: Maybe<Scalars['Int']>;
  PaidAmount?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "erp.PaymentHistory" */
export type Erp_PaymentHistory_Min_Order_By = {
  Date?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "erp.PaymentHistory" */
export type Erp_PaymentHistory_Mutation_Response = {
  __typename?: 'erp_PaymentHistory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Erp_PaymentHistory>;
};

/** on conflict condition type for table "erp.PaymentHistory" */
export type Erp_PaymentHistory_On_Conflict = {
  constraint: Erp_PaymentHistory_Constraint;
  update_columns?: Array<Erp_PaymentHistory_Update_Column>;
  where?: InputMaybe<Erp_PaymentHistory_Bool_Exp>;
};

/** Ordering options when selecting data from "erp.PaymentHistory". */
export type Erp_PaymentHistory_Order_By = {
  Date?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  Order?: InputMaybe<Erp_Orders_Order_By>;
  OrderID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
};

/** primary key columns input for table: erp_PaymentHistory */
export type Erp_PaymentHistory_Pk_Columns_Input = {
  ID: Scalars['Int'];
};

/** select columns of table "erp.PaymentHistory" */
export enum Erp_PaymentHistory_Select_Column {
  /** column name */
  Date = 'Date',
  /** column name */
  Id = 'ID',
  /** column name */
  OrderId = 'OrderID',
  /** column name */
  PaidAmount = 'PaidAmount'
}

/** input type for updating data in table "erp.PaymentHistory" */
export type Erp_PaymentHistory_Set_Input = {
  Date?: InputMaybe<Scalars['timestamp']>;
  ID?: InputMaybe<Scalars['Int']>;
  OrderID?: InputMaybe<Scalars['Int']>;
  PaidAmount?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Erp_PaymentHistory_Stddev_Fields = {
  __typename?: 'erp_PaymentHistory_stddev_fields';
  ID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  PaidAmount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "erp.PaymentHistory" */
export type Erp_PaymentHistory_Stddev_Order_By = {
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Erp_PaymentHistory_Stddev_Pop_Fields = {
  __typename?: 'erp_PaymentHistory_stddev_pop_fields';
  ID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  PaidAmount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "erp.PaymentHistory" */
export type Erp_PaymentHistory_Stddev_Pop_Order_By = {
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Erp_PaymentHistory_Stddev_Samp_Fields = {
  __typename?: 'erp_PaymentHistory_stddev_samp_fields';
  ID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  PaidAmount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "erp.PaymentHistory" */
export type Erp_PaymentHistory_Stddev_Samp_Order_By = {
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Erp_PaymentHistory_Sum_Fields = {
  __typename?: 'erp_PaymentHistory_sum_fields';
  ID?: Maybe<Scalars['Int']>;
  OrderID?: Maybe<Scalars['Int']>;
  PaidAmount?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "erp.PaymentHistory" */
export type Erp_PaymentHistory_Sum_Order_By = {
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
};

/** update columns of table "erp.PaymentHistory" */
export enum Erp_PaymentHistory_Update_Column {
  /** column name */
  Date = 'Date',
  /** column name */
  Id = 'ID',
  /** column name */
  OrderId = 'OrderID',
  /** column name */
  PaidAmount = 'PaidAmount'
}

/** aggregate var_pop on columns */
export type Erp_PaymentHistory_Var_Pop_Fields = {
  __typename?: 'erp_PaymentHistory_var_pop_fields';
  ID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  PaidAmount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "erp.PaymentHistory" */
export type Erp_PaymentHistory_Var_Pop_Order_By = {
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Erp_PaymentHistory_Var_Samp_Fields = {
  __typename?: 'erp_PaymentHistory_var_samp_fields';
  ID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  PaidAmount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "erp.PaymentHistory" */
export type Erp_PaymentHistory_Var_Samp_Order_By = {
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Erp_PaymentHistory_Variance_Fields = {
  __typename?: 'erp_PaymentHistory_variance_fields';
  ID?: Maybe<Scalars['Float']>;
  OrderID?: Maybe<Scalars['Float']>;
  PaidAmount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "erp.PaymentHistory" */
export type Erp_PaymentHistory_Variance_Order_By = {
  ID?: InputMaybe<Order_By>;
  OrderID?: InputMaybe<Order_By>;
  PaidAmount?: InputMaybe<Order_By>;
};

/** columns and relationships of "erp.Tokens" */
export type Erp_Tokens = {
  __typename?: 'erp_Tokens';
  ID: Scalars['Int'];
  RefreshToken: Scalars['String'];
  /** An object relationship */
  User: Erp_Users;
  UserID: Scalars['Int'];
};

/** aggregated selection of "erp.Tokens" */
export type Erp_Tokens_Aggregate = {
  __typename?: 'erp_Tokens_aggregate';
  aggregate?: Maybe<Erp_Tokens_Aggregate_Fields>;
  nodes: Array<Erp_Tokens>;
};

/** aggregate fields of "erp.Tokens" */
export type Erp_Tokens_Aggregate_Fields = {
  __typename?: 'erp_Tokens_aggregate_fields';
  avg?: Maybe<Erp_Tokens_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Erp_Tokens_Max_Fields>;
  min?: Maybe<Erp_Tokens_Min_Fields>;
  stddev?: Maybe<Erp_Tokens_Stddev_Fields>;
  stddev_pop?: Maybe<Erp_Tokens_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Erp_Tokens_Stddev_Samp_Fields>;
  sum?: Maybe<Erp_Tokens_Sum_Fields>;
  var_pop?: Maybe<Erp_Tokens_Var_Pop_Fields>;
  var_samp?: Maybe<Erp_Tokens_Var_Samp_Fields>;
  variance?: Maybe<Erp_Tokens_Variance_Fields>;
};


/** aggregate fields of "erp.Tokens" */
export type Erp_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Erp_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "erp.Tokens" */
export type Erp_Tokens_Aggregate_Order_By = {
  avg?: InputMaybe<Erp_Tokens_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Erp_Tokens_Max_Order_By>;
  min?: InputMaybe<Erp_Tokens_Min_Order_By>;
  stddev?: InputMaybe<Erp_Tokens_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Erp_Tokens_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Erp_Tokens_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Erp_Tokens_Sum_Order_By>;
  var_pop?: InputMaybe<Erp_Tokens_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Erp_Tokens_Var_Samp_Order_By>;
  variance?: InputMaybe<Erp_Tokens_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "erp.Tokens" */
export type Erp_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Erp_Tokens_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Erp_Tokens_On_Conflict>;
};

/** aggregate avg on columns */
export type Erp_Tokens_Avg_Fields = {
  __typename?: 'erp_Tokens_avg_fields';
  ID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "erp.Tokens" */
export type Erp_Tokens_Avg_Order_By = {
  ID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "erp.Tokens". All fields are combined with a logical 'AND'. */
export type Erp_Tokens_Bool_Exp = {
  ID?: InputMaybe<Int_Comparison_Exp>;
  RefreshToken?: InputMaybe<String_Comparison_Exp>;
  User?: InputMaybe<Erp_Users_Bool_Exp>;
  UserID?: InputMaybe<Int_Comparison_Exp>;
  _and?: InputMaybe<Array<Erp_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Erp_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Erp_Tokens_Bool_Exp>>;
};

/** unique or primary key constraints on table "erp.Tokens" */
export enum Erp_Tokens_Constraint {
  /** unique or primary key constraint */
  TokrnsPkey = 'Tokrns_pkey'
}

/** input type for incrementing numeric columns in table "erp.Tokens" */
export type Erp_Tokens_Inc_Input = {
  ID?: InputMaybe<Scalars['Int']>;
  UserID?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "erp.Tokens" */
export type Erp_Tokens_Insert_Input = {
  ID?: InputMaybe<Scalars['Int']>;
  RefreshToken?: InputMaybe<Scalars['String']>;
  User?: InputMaybe<Erp_Users_Obj_Rel_Insert_Input>;
  UserID?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Erp_Tokens_Max_Fields = {
  __typename?: 'erp_Tokens_max_fields';
  ID?: Maybe<Scalars['Int']>;
  RefreshToken?: Maybe<Scalars['String']>;
  UserID?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "erp.Tokens" */
export type Erp_Tokens_Max_Order_By = {
  ID?: InputMaybe<Order_By>;
  RefreshToken?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Erp_Tokens_Min_Fields = {
  __typename?: 'erp_Tokens_min_fields';
  ID?: Maybe<Scalars['Int']>;
  RefreshToken?: Maybe<Scalars['String']>;
  UserID?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "erp.Tokens" */
export type Erp_Tokens_Min_Order_By = {
  ID?: InputMaybe<Order_By>;
  RefreshToken?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "erp.Tokens" */
export type Erp_Tokens_Mutation_Response = {
  __typename?: 'erp_Tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Erp_Tokens>;
};

/** on conflict condition type for table "erp.Tokens" */
export type Erp_Tokens_On_Conflict = {
  constraint: Erp_Tokens_Constraint;
  update_columns?: Array<Erp_Tokens_Update_Column>;
  where?: InputMaybe<Erp_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "erp.Tokens". */
export type Erp_Tokens_Order_By = {
  ID?: InputMaybe<Order_By>;
  RefreshToken?: InputMaybe<Order_By>;
  User?: InputMaybe<Erp_Users_Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** primary key columns input for table: erp_Tokens */
export type Erp_Tokens_Pk_Columns_Input = {
  ID: Scalars['Int'];
};

/** select columns of table "erp.Tokens" */
export enum Erp_Tokens_Select_Column {
  /** column name */
  Id = 'ID',
  /** column name */
  RefreshToken = 'RefreshToken',
  /** column name */
  UserId = 'UserID'
}

/** input type for updating data in table "erp.Tokens" */
export type Erp_Tokens_Set_Input = {
  ID?: InputMaybe<Scalars['Int']>;
  RefreshToken?: InputMaybe<Scalars['String']>;
  UserID?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Erp_Tokens_Stddev_Fields = {
  __typename?: 'erp_Tokens_stddev_fields';
  ID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "erp.Tokens" */
export type Erp_Tokens_Stddev_Order_By = {
  ID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Erp_Tokens_Stddev_Pop_Fields = {
  __typename?: 'erp_Tokens_stddev_pop_fields';
  ID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "erp.Tokens" */
export type Erp_Tokens_Stddev_Pop_Order_By = {
  ID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Erp_Tokens_Stddev_Samp_Fields = {
  __typename?: 'erp_Tokens_stddev_samp_fields';
  ID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "erp.Tokens" */
export type Erp_Tokens_Stddev_Samp_Order_By = {
  ID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Erp_Tokens_Sum_Fields = {
  __typename?: 'erp_Tokens_sum_fields';
  ID?: Maybe<Scalars['Int']>;
  UserID?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "erp.Tokens" */
export type Erp_Tokens_Sum_Order_By = {
  ID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** update columns of table "erp.Tokens" */
export enum Erp_Tokens_Update_Column {
  /** column name */
  Id = 'ID',
  /** column name */
  RefreshToken = 'RefreshToken',
  /** column name */
  UserId = 'UserID'
}

/** aggregate var_pop on columns */
export type Erp_Tokens_Var_Pop_Fields = {
  __typename?: 'erp_Tokens_var_pop_fields';
  ID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "erp.Tokens" */
export type Erp_Tokens_Var_Pop_Order_By = {
  ID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Erp_Tokens_Var_Samp_Fields = {
  __typename?: 'erp_Tokens_var_samp_fields';
  ID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "erp.Tokens" */
export type Erp_Tokens_Var_Samp_Order_By = {
  ID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Erp_Tokens_Variance_Fields = {
  __typename?: 'erp_Tokens_variance_fields';
  ID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "erp.Tokens" */
export type Erp_Tokens_Variance_Order_By = {
  ID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** columns and relationships of "erp.Users" */
export type Erp_Users = {
  __typename?: 'erp_Users';
  /** An object relationship */
  AccessLevel?: Maybe<Erp_AccessLevels>;
  AccessLevelID?: Maybe<Scalars['Int']>;
  /** An array relationship */
  Comments: Array<Erp_Comments>;
  /** An aggregate relationship */
  Comments_aggregate: Erp_Comments_Aggregate;
  Email?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  LastName?: Maybe<Scalars['String']>;
  /** An array relationship */
  Notifications: Array<Erp_Notifications>;
  /** An aggregate relationship */
  Notifications_aggregate: Erp_Notifications_Aggregate;
  /** An array relationship */
  Orders: Array<Erp_Orders>;
  /** An aggregate relationship */
  Orders_aggregate: Erp_Orders_Aggregate;
  Password?: Maybe<Scalars['String']>;
  /** An array relationship */
  Tokrns: Array<Erp_Tokens>;
  /** An aggregate relationship */
  Tokrns_aggregate: Erp_Tokens_Aggregate;
  UserID: Scalars['Int'];
};


/** columns and relationships of "erp.Users" */
export type Erp_UsersCommentsArgs = {
  distinct_on?: InputMaybe<Array<Erp_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Comments_Order_By>>;
  where?: InputMaybe<Erp_Comments_Bool_Exp>;
};


/** columns and relationships of "erp.Users" */
export type Erp_UsersComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Comments_Order_By>>;
  where?: InputMaybe<Erp_Comments_Bool_Exp>;
};


/** columns and relationships of "erp.Users" */
export type Erp_UsersNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Erp_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Notifications_Order_By>>;
  where?: InputMaybe<Erp_Notifications_Bool_Exp>;
};


/** columns and relationships of "erp.Users" */
export type Erp_UsersNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Notifications_Order_By>>;
  where?: InputMaybe<Erp_Notifications_Bool_Exp>;
};


/** columns and relationships of "erp.Users" */
export type Erp_UsersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Erp_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Orders_Order_By>>;
  where?: InputMaybe<Erp_Orders_Bool_Exp>;
};


/** columns and relationships of "erp.Users" */
export type Erp_UsersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Orders_Order_By>>;
  where?: InputMaybe<Erp_Orders_Bool_Exp>;
};


/** columns and relationships of "erp.Users" */
export type Erp_UsersTokrnsArgs = {
  distinct_on?: InputMaybe<Array<Erp_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Tokens_Order_By>>;
  where?: InputMaybe<Erp_Tokens_Bool_Exp>;
};


/** columns and relationships of "erp.Users" */
export type Erp_UsersTokrns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Tokens_Order_By>>;
  where?: InputMaybe<Erp_Tokens_Bool_Exp>;
};

/** aggregated selection of "erp.Users" */
export type Erp_Users_Aggregate = {
  __typename?: 'erp_Users_aggregate';
  aggregate?: Maybe<Erp_Users_Aggregate_Fields>;
  nodes: Array<Erp_Users>;
};

/** aggregate fields of "erp.Users" */
export type Erp_Users_Aggregate_Fields = {
  __typename?: 'erp_Users_aggregate_fields';
  avg?: Maybe<Erp_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Erp_Users_Max_Fields>;
  min?: Maybe<Erp_Users_Min_Fields>;
  stddev?: Maybe<Erp_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Erp_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Erp_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Erp_Users_Sum_Fields>;
  var_pop?: Maybe<Erp_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Erp_Users_Var_Samp_Fields>;
  variance?: Maybe<Erp_Users_Variance_Fields>;
};


/** aggregate fields of "erp.Users" */
export type Erp_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Erp_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "erp.Users" */
export type Erp_Users_Aggregate_Order_By = {
  avg?: InputMaybe<Erp_Users_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Erp_Users_Max_Order_By>;
  min?: InputMaybe<Erp_Users_Min_Order_By>;
  stddev?: InputMaybe<Erp_Users_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Erp_Users_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Erp_Users_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Erp_Users_Sum_Order_By>;
  var_pop?: InputMaybe<Erp_Users_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Erp_Users_Var_Samp_Order_By>;
  variance?: InputMaybe<Erp_Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "erp.Users" */
export type Erp_Users_Arr_Rel_Insert_Input = {
  data: Array<Erp_Users_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Erp_Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Erp_Users_Avg_Fields = {
  __typename?: 'erp_Users_avg_fields';
  AccessLevelID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "erp.Users" */
export type Erp_Users_Avg_Order_By = {
  AccessLevelID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "erp.Users". All fields are combined with a logical 'AND'. */
export type Erp_Users_Bool_Exp = {
  AccessLevel?: InputMaybe<Erp_AccessLevels_Bool_Exp>;
  AccessLevelID?: InputMaybe<Int_Comparison_Exp>;
  Comments?: InputMaybe<Erp_Comments_Bool_Exp>;
  Email?: InputMaybe<String_Comparison_Exp>;
  FirstName?: InputMaybe<String_Comparison_Exp>;
  LastName?: InputMaybe<String_Comparison_Exp>;
  Notifications?: InputMaybe<Erp_Notifications_Bool_Exp>;
  Orders?: InputMaybe<Erp_Orders_Bool_Exp>;
  Password?: InputMaybe<String_Comparison_Exp>;
  Tokrns?: InputMaybe<Erp_Tokens_Bool_Exp>;
  UserID?: InputMaybe<Int_Comparison_Exp>;
  _and?: InputMaybe<Array<Erp_Users_Bool_Exp>>;
  _not?: InputMaybe<Erp_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Erp_Users_Bool_Exp>>;
};

/** unique or primary key constraints on table "erp.Users" */
export enum Erp_Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'Users_pkey'
}

/** input type for incrementing numeric columns in table "erp.Users" */
export type Erp_Users_Inc_Input = {
  AccessLevelID?: InputMaybe<Scalars['Int']>;
  UserID?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "erp.Users" */
export type Erp_Users_Insert_Input = {
  AccessLevel?: InputMaybe<Erp_AccessLevels_Obj_Rel_Insert_Input>;
  AccessLevelID?: InputMaybe<Scalars['Int']>;
  Comments?: InputMaybe<Erp_Comments_Arr_Rel_Insert_Input>;
  Email?: InputMaybe<Scalars['String']>;
  FirstName?: InputMaybe<Scalars['String']>;
  LastName?: InputMaybe<Scalars['String']>;
  Notifications?: InputMaybe<Erp_Notifications_Arr_Rel_Insert_Input>;
  Orders?: InputMaybe<Erp_Orders_Arr_Rel_Insert_Input>;
  Password?: InputMaybe<Scalars['String']>;
  Tokrns?: InputMaybe<Erp_Tokens_Arr_Rel_Insert_Input>;
  UserID?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Erp_Users_Max_Fields = {
  __typename?: 'erp_Users_max_fields';
  AccessLevelID?: Maybe<Scalars['Int']>;
  Email?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  LastName?: Maybe<Scalars['String']>;
  Password?: Maybe<Scalars['String']>;
  UserID?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "erp.Users" */
export type Erp_Users_Max_Order_By = {
  AccessLevelID?: InputMaybe<Order_By>;
  Email?: InputMaybe<Order_By>;
  FirstName?: InputMaybe<Order_By>;
  LastName?: InputMaybe<Order_By>;
  Password?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Erp_Users_Min_Fields = {
  __typename?: 'erp_Users_min_fields';
  AccessLevelID?: Maybe<Scalars['Int']>;
  Email?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  LastName?: Maybe<Scalars['String']>;
  Password?: Maybe<Scalars['String']>;
  UserID?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "erp.Users" */
export type Erp_Users_Min_Order_By = {
  AccessLevelID?: InputMaybe<Order_By>;
  Email?: InputMaybe<Order_By>;
  FirstName?: InputMaybe<Order_By>;
  LastName?: InputMaybe<Order_By>;
  Password?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "erp.Users" */
export type Erp_Users_Mutation_Response = {
  __typename?: 'erp_Users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Erp_Users>;
};

/** input type for inserting object relation for remote table "erp.Users" */
export type Erp_Users_Obj_Rel_Insert_Input = {
  data: Erp_Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Erp_Users_On_Conflict>;
};

/** on conflict condition type for table "erp.Users" */
export type Erp_Users_On_Conflict = {
  constraint: Erp_Users_Constraint;
  update_columns?: Array<Erp_Users_Update_Column>;
  where?: InputMaybe<Erp_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "erp.Users". */
export type Erp_Users_Order_By = {
  AccessLevel?: InputMaybe<Erp_AccessLevels_Order_By>;
  AccessLevelID?: InputMaybe<Order_By>;
  Comments_aggregate?: InputMaybe<Erp_Comments_Aggregate_Order_By>;
  Email?: InputMaybe<Order_By>;
  FirstName?: InputMaybe<Order_By>;
  LastName?: InputMaybe<Order_By>;
  Notifications_aggregate?: InputMaybe<Erp_Notifications_Aggregate_Order_By>;
  Orders_aggregate?: InputMaybe<Erp_Orders_Aggregate_Order_By>;
  Password?: InputMaybe<Order_By>;
  Tokrns_aggregate?: InputMaybe<Erp_Tokens_Aggregate_Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** primary key columns input for table: erp_Users */
export type Erp_Users_Pk_Columns_Input = {
  UserID: Scalars['Int'];
};

/** select columns of table "erp.Users" */
export enum Erp_Users_Select_Column {
  /** column name */
  AccessLevelId = 'AccessLevelID',
  /** column name */
  Email = 'Email',
  /** column name */
  FirstName = 'FirstName',
  /** column name */
  LastName = 'LastName',
  /** column name */
  Password = 'Password',
  /** column name */
  UserId = 'UserID'
}

/** input type for updating data in table "erp.Users" */
export type Erp_Users_Set_Input = {
  AccessLevelID?: InputMaybe<Scalars['Int']>;
  Email?: InputMaybe<Scalars['String']>;
  FirstName?: InputMaybe<Scalars['String']>;
  LastName?: InputMaybe<Scalars['String']>;
  Password?: InputMaybe<Scalars['String']>;
  UserID?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Erp_Users_Stddev_Fields = {
  __typename?: 'erp_Users_stddev_fields';
  AccessLevelID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "erp.Users" */
export type Erp_Users_Stddev_Order_By = {
  AccessLevelID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Erp_Users_Stddev_Pop_Fields = {
  __typename?: 'erp_Users_stddev_pop_fields';
  AccessLevelID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "erp.Users" */
export type Erp_Users_Stddev_Pop_Order_By = {
  AccessLevelID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Erp_Users_Stddev_Samp_Fields = {
  __typename?: 'erp_Users_stddev_samp_fields';
  AccessLevelID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "erp.Users" */
export type Erp_Users_Stddev_Samp_Order_By = {
  AccessLevelID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Erp_Users_Sum_Fields = {
  __typename?: 'erp_Users_sum_fields';
  AccessLevelID?: Maybe<Scalars['Int']>;
  UserID?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "erp.Users" */
export type Erp_Users_Sum_Order_By = {
  AccessLevelID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** update columns of table "erp.Users" */
export enum Erp_Users_Update_Column {
  /** column name */
  AccessLevelId = 'AccessLevelID',
  /** column name */
  Email = 'Email',
  /** column name */
  FirstName = 'FirstName',
  /** column name */
  LastName = 'LastName',
  /** column name */
  Password = 'Password',
  /** column name */
  UserId = 'UserID'
}

/** aggregate var_pop on columns */
export type Erp_Users_Var_Pop_Fields = {
  __typename?: 'erp_Users_var_pop_fields';
  AccessLevelID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "erp.Users" */
export type Erp_Users_Var_Pop_Order_By = {
  AccessLevelID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Erp_Users_Var_Samp_Fields = {
  __typename?: 'erp_Users_var_samp_fields';
  AccessLevelID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "erp.Users" */
export type Erp_Users_Var_Samp_Order_By = {
  AccessLevelID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Erp_Users_Variance_Fields = {
  __typename?: 'erp_Users_variance_fields';
  AccessLevelID?: Maybe<Scalars['Float']>;
  UserID?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "erp.Users" */
export type Erp_Users_Variance_Order_By = {
  AccessLevelID?: InputMaybe<Order_By>;
  UserID?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "attendance.config" */
  delete_attendance_config?: Maybe<Attendance_Config_Mutation_Response>;
  /** delete single row from the table: "attendance.config" */
  delete_attendance_config_by_pk?: Maybe<Attendance_Config>;
  /** delete data from the table: "attendance.intervals" */
  delete_attendance_intervals?: Maybe<Attendance_Intervals_Mutation_Response>;
  /** delete single row from the table: "attendance.intervals" */
  delete_attendance_intervals_by_pk?: Maybe<Attendance_Intervals>;
  /** delete data from the table: "attendance.users" */
  delete_attendance_users?: Maybe<Attendance_Users_Mutation_Response>;
  /** delete single row from the table: "attendance.users" */
  delete_attendance_users_by_pk?: Maybe<Attendance_Users>;
  /** delete data from the table: "auto_poster_bot.advertising_chat" */
  delete_auto_poster_bot_advertising_chat?: Maybe<Auto_Poster_Bot_Advertising_Chat_Mutation_Response>;
  /** delete single row from the table: "auto_poster_bot.advertising_chat" */
  delete_auto_poster_bot_advertising_chat_by_pk?: Maybe<Auto_Poster_Bot_Advertising_Chat>;
  /** delete data from the table: "auto_poster_bot.payment" */
  delete_auto_poster_bot_payment?: Maybe<Auto_Poster_Bot_Payment_Mutation_Response>;
  /** delete single row from the table: "auto_poster_bot.payment" */
  delete_auto_poster_bot_payment_by_pk?: Maybe<Auto_Poster_Bot_Payment>;
  /** delete data from the table: "auto_poster_bot.post" */
  delete_auto_poster_bot_post?: Maybe<Auto_Poster_Bot_Post_Mutation_Response>;
  /** delete single row from the table: "auto_poster_bot.post" */
  delete_auto_poster_bot_post_by_pk?: Maybe<Auto_Poster_Bot_Post>;
  /** delete data from the table: "auto_poster_bot.user" */
  delete_auto_poster_bot_user?: Maybe<Auto_Poster_Bot_User_Mutation_Response>;
  /** delete single row from the table: "auto_poster_bot.user" */
  delete_auto_poster_bot_user_by_pk?: Maybe<Auto_Poster_Bot_User>;
  /** delete data from the table: "auto_poster_bot.user_status" */
  delete_auto_poster_bot_user_status?: Maybe<Auto_Poster_Bot_User_Status_Mutation_Response>;
  /** delete single row from the table: "auto_poster_bot.user_status" */
  delete_auto_poster_bot_user_status_by_pk?: Maybe<Auto_Poster_Bot_User_Status>;
  /** delete data from the table: "erp.AccessLevels" */
  delete_erp_AccessLevels?: Maybe<Erp_AccessLevels_Mutation_Response>;
  /** delete single row from the table: "erp.AccessLevels" */
  delete_erp_AccessLevels_by_pk?: Maybe<Erp_AccessLevels>;
  /** delete data from the table: "erp.Comments" */
  delete_erp_Comments?: Maybe<Erp_Comments_Mutation_Response>;
  /** delete single row from the table: "erp.Comments" */
  delete_erp_Comments_by_pk?: Maybe<Erp_Comments>;
  /** delete data from the table: "erp.Docs" */
  delete_erp_Docs?: Maybe<Erp_Docs_Mutation_Response>;
  /** delete single row from the table: "erp.Docs" */
  delete_erp_Docs_by_pk?: Maybe<Erp_Docs>;
  /** delete data from the table: "erp.Notifications" */
  delete_erp_Notifications?: Maybe<Erp_Notifications_Mutation_Response>;
  /** delete single row from the table: "erp.Notifications" */
  delete_erp_Notifications_by_pk?: Maybe<Erp_Notifications>;
  /** delete data from the table: "erp.OrderItems" */
  delete_erp_OrderItems?: Maybe<Erp_OrderItems_Mutation_Response>;
  /** delete single row from the table: "erp.OrderItems" */
  delete_erp_OrderItems_by_pk?: Maybe<Erp_OrderItems>;
  /** delete data from the table: "erp.OrderStatus" */
  delete_erp_OrderStatus?: Maybe<Erp_OrderStatus_Mutation_Response>;
  /** delete single row from the table: "erp.OrderStatus" */
  delete_erp_OrderStatus_by_pk?: Maybe<Erp_OrderStatus>;
  /** delete data from the table: "erp.Orders" */
  delete_erp_Orders?: Maybe<Erp_Orders_Mutation_Response>;
  /** delete single row from the table: "erp.Orders" */
  delete_erp_Orders_by_pk?: Maybe<Erp_Orders>;
  /** delete data from the table: "erp.PaymentHistory" */
  delete_erp_PaymentHistory?: Maybe<Erp_PaymentHistory_Mutation_Response>;
  /** delete single row from the table: "erp.PaymentHistory" */
  delete_erp_PaymentHistory_by_pk?: Maybe<Erp_PaymentHistory>;
  /** delete data from the table: "erp.Tokens" */
  delete_erp_Tokens?: Maybe<Erp_Tokens_Mutation_Response>;
  /** delete single row from the table: "erp.Tokens" */
  delete_erp_Tokens_by_pk?: Maybe<Erp_Tokens>;
  /** delete data from the table: "erp.Users" */
  delete_erp_Users?: Maybe<Erp_Users_Mutation_Response>;
  /** delete single row from the table: "erp.Users" */
  delete_erp_Users_by_pk?: Maybe<Erp_Users>;
  /** insert data into the table: "attendance.config" */
  insert_attendance_config?: Maybe<Attendance_Config_Mutation_Response>;
  /** insert a single row into the table: "attendance.config" */
  insert_attendance_config_one?: Maybe<Attendance_Config>;
  /** insert data into the table: "attendance.intervals" */
  insert_attendance_intervals?: Maybe<Attendance_Intervals_Mutation_Response>;
  /** insert a single row into the table: "attendance.intervals" */
  insert_attendance_intervals_one?: Maybe<Attendance_Intervals>;
  /** insert data into the table: "attendance.users" */
  insert_attendance_users?: Maybe<Attendance_Users_Mutation_Response>;
  /** insert a single row into the table: "attendance.users" */
  insert_attendance_users_one?: Maybe<Attendance_Users>;
  /** insert data into the table: "auto_poster_bot.advertising_chat" */
  insert_auto_poster_bot_advertising_chat?: Maybe<Auto_Poster_Bot_Advertising_Chat_Mutation_Response>;
  /** insert a single row into the table: "auto_poster_bot.advertising_chat" */
  insert_auto_poster_bot_advertising_chat_one?: Maybe<Auto_Poster_Bot_Advertising_Chat>;
  /** insert data into the table: "auto_poster_bot.payment" */
  insert_auto_poster_bot_payment?: Maybe<Auto_Poster_Bot_Payment_Mutation_Response>;
  /** insert a single row into the table: "auto_poster_bot.payment" */
  insert_auto_poster_bot_payment_one?: Maybe<Auto_Poster_Bot_Payment>;
  /** insert data into the table: "auto_poster_bot.post" */
  insert_auto_poster_bot_post?: Maybe<Auto_Poster_Bot_Post_Mutation_Response>;
  /** insert a single row into the table: "auto_poster_bot.post" */
  insert_auto_poster_bot_post_one?: Maybe<Auto_Poster_Bot_Post>;
  /** insert data into the table: "auto_poster_bot.user" */
  insert_auto_poster_bot_user?: Maybe<Auto_Poster_Bot_User_Mutation_Response>;
  /** insert a single row into the table: "auto_poster_bot.user" */
  insert_auto_poster_bot_user_one?: Maybe<Auto_Poster_Bot_User>;
  /** insert data into the table: "auto_poster_bot.user_status" */
  insert_auto_poster_bot_user_status?: Maybe<Auto_Poster_Bot_User_Status_Mutation_Response>;
  /** insert a single row into the table: "auto_poster_bot.user_status" */
  insert_auto_poster_bot_user_status_one?: Maybe<Auto_Poster_Bot_User_Status>;
  /** insert data into the table: "erp.AccessLevels" */
  insert_erp_AccessLevels?: Maybe<Erp_AccessLevels_Mutation_Response>;
  /** insert a single row into the table: "erp.AccessLevels" */
  insert_erp_AccessLevels_one?: Maybe<Erp_AccessLevels>;
  /** insert data into the table: "erp.Comments" */
  insert_erp_Comments?: Maybe<Erp_Comments_Mutation_Response>;
  /** insert a single row into the table: "erp.Comments" */
  insert_erp_Comments_one?: Maybe<Erp_Comments>;
  /** insert data into the table: "erp.Docs" */
  insert_erp_Docs?: Maybe<Erp_Docs_Mutation_Response>;
  /** insert a single row into the table: "erp.Docs" */
  insert_erp_Docs_one?: Maybe<Erp_Docs>;
  /** insert data into the table: "erp.Notifications" */
  insert_erp_Notifications?: Maybe<Erp_Notifications_Mutation_Response>;
  /** insert a single row into the table: "erp.Notifications" */
  insert_erp_Notifications_one?: Maybe<Erp_Notifications>;
  /** insert data into the table: "erp.OrderItems" */
  insert_erp_OrderItems?: Maybe<Erp_OrderItems_Mutation_Response>;
  /** insert a single row into the table: "erp.OrderItems" */
  insert_erp_OrderItems_one?: Maybe<Erp_OrderItems>;
  /** insert data into the table: "erp.OrderStatus" */
  insert_erp_OrderStatus?: Maybe<Erp_OrderStatus_Mutation_Response>;
  /** insert a single row into the table: "erp.OrderStatus" */
  insert_erp_OrderStatus_one?: Maybe<Erp_OrderStatus>;
  /** insert data into the table: "erp.Orders" */
  insert_erp_Orders?: Maybe<Erp_Orders_Mutation_Response>;
  /** insert a single row into the table: "erp.Orders" */
  insert_erp_Orders_one?: Maybe<Erp_Orders>;
  /** insert data into the table: "erp.PaymentHistory" */
  insert_erp_PaymentHistory?: Maybe<Erp_PaymentHistory_Mutation_Response>;
  /** insert a single row into the table: "erp.PaymentHistory" */
  insert_erp_PaymentHistory_one?: Maybe<Erp_PaymentHistory>;
  /** insert data into the table: "erp.Tokens" */
  insert_erp_Tokens?: Maybe<Erp_Tokens_Mutation_Response>;
  /** insert a single row into the table: "erp.Tokens" */
  insert_erp_Tokens_one?: Maybe<Erp_Tokens>;
  /** insert data into the table: "erp.Users" */
  insert_erp_Users?: Maybe<Erp_Users_Mutation_Response>;
  /** insert a single row into the table: "erp.Users" */
  insert_erp_Users_one?: Maybe<Erp_Users>;
  /** update data of the table: "attendance.config" */
  update_attendance_config?: Maybe<Attendance_Config_Mutation_Response>;
  /** update single row of the table: "attendance.config" */
  update_attendance_config_by_pk?: Maybe<Attendance_Config>;
  /** update data of the table: "attendance.intervals" */
  update_attendance_intervals?: Maybe<Attendance_Intervals_Mutation_Response>;
  /** update single row of the table: "attendance.intervals" */
  update_attendance_intervals_by_pk?: Maybe<Attendance_Intervals>;
  /** update data of the table: "attendance.users" */
  update_attendance_users?: Maybe<Attendance_Users_Mutation_Response>;
  /** update single row of the table: "attendance.users" */
  update_attendance_users_by_pk?: Maybe<Attendance_Users>;
  /** update data of the table: "auto_poster_bot.advertising_chat" */
  update_auto_poster_bot_advertising_chat?: Maybe<Auto_Poster_Bot_Advertising_Chat_Mutation_Response>;
  /** update single row of the table: "auto_poster_bot.advertising_chat" */
  update_auto_poster_bot_advertising_chat_by_pk?: Maybe<Auto_Poster_Bot_Advertising_Chat>;
  /** update data of the table: "auto_poster_bot.payment" */
  update_auto_poster_bot_payment?: Maybe<Auto_Poster_Bot_Payment_Mutation_Response>;
  /** update single row of the table: "auto_poster_bot.payment" */
  update_auto_poster_bot_payment_by_pk?: Maybe<Auto_Poster_Bot_Payment>;
  /** update data of the table: "auto_poster_bot.post" */
  update_auto_poster_bot_post?: Maybe<Auto_Poster_Bot_Post_Mutation_Response>;
  /** update single row of the table: "auto_poster_bot.post" */
  update_auto_poster_bot_post_by_pk?: Maybe<Auto_Poster_Bot_Post>;
  /** update data of the table: "auto_poster_bot.user" */
  update_auto_poster_bot_user?: Maybe<Auto_Poster_Bot_User_Mutation_Response>;
  /** update single row of the table: "auto_poster_bot.user" */
  update_auto_poster_bot_user_by_pk?: Maybe<Auto_Poster_Bot_User>;
  /** update data of the table: "auto_poster_bot.user_status" */
  update_auto_poster_bot_user_status?: Maybe<Auto_Poster_Bot_User_Status_Mutation_Response>;
  /** update single row of the table: "auto_poster_bot.user_status" */
  update_auto_poster_bot_user_status_by_pk?: Maybe<Auto_Poster_Bot_User_Status>;
  /** update data of the table: "erp.AccessLevels" */
  update_erp_AccessLevels?: Maybe<Erp_AccessLevels_Mutation_Response>;
  /** update single row of the table: "erp.AccessLevels" */
  update_erp_AccessLevels_by_pk?: Maybe<Erp_AccessLevels>;
  /** update data of the table: "erp.Comments" */
  update_erp_Comments?: Maybe<Erp_Comments_Mutation_Response>;
  /** update single row of the table: "erp.Comments" */
  update_erp_Comments_by_pk?: Maybe<Erp_Comments>;
  /** update data of the table: "erp.Docs" */
  update_erp_Docs?: Maybe<Erp_Docs_Mutation_Response>;
  /** update single row of the table: "erp.Docs" */
  update_erp_Docs_by_pk?: Maybe<Erp_Docs>;
  /** update data of the table: "erp.Notifications" */
  update_erp_Notifications?: Maybe<Erp_Notifications_Mutation_Response>;
  /** update single row of the table: "erp.Notifications" */
  update_erp_Notifications_by_pk?: Maybe<Erp_Notifications>;
  /** update data of the table: "erp.OrderItems" */
  update_erp_OrderItems?: Maybe<Erp_OrderItems_Mutation_Response>;
  /** update single row of the table: "erp.OrderItems" */
  update_erp_OrderItems_by_pk?: Maybe<Erp_OrderItems>;
  /** update data of the table: "erp.OrderStatus" */
  update_erp_OrderStatus?: Maybe<Erp_OrderStatus_Mutation_Response>;
  /** update single row of the table: "erp.OrderStatus" */
  update_erp_OrderStatus_by_pk?: Maybe<Erp_OrderStatus>;
  /** update data of the table: "erp.Orders" */
  update_erp_Orders?: Maybe<Erp_Orders_Mutation_Response>;
  /** update single row of the table: "erp.Orders" */
  update_erp_Orders_by_pk?: Maybe<Erp_Orders>;
  /** update data of the table: "erp.PaymentHistory" */
  update_erp_PaymentHistory?: Maybe<Erp_PaymentHistory_Mutation_Response>;
  /** update single row of the table: "erp.PaymentHistory" */
  update_erp_PaymentHistory_by_pk?: Maybe<Erp_PaymentHistory>;
  /** update data of the table: "erp.Tokens" */
  update_erp_Tokens?: Maybe<Erp_Tokens_Mutation_Response>;
  /** update single row of the table: "erp.Tokens" */
  update_erp_Tokens_by_pk?: Maybe<Erp_Tokens>;
  /** update data of the table: "erp.Users" */
  update_erp_Users?: Maybe<Erp_Users_Mutation_Response>;
  /** update single row of the table: "erp.Users" */
  update_erp_Users_by_pk?: Maybe<Erp_Users>;
};


/** mutation root */
export type Mutation_RootDelete_Attendance_ConfigArgs = {
  where: Attendance_Config_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Attendance_Config_By_PkArgs = {
  ID: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Attendance_IntervalsArgs = {
  where: Attendance_Intervals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Attendance_Intervals_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Attendance_UsersArgs = {
  where: Attendance_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Attendance_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Auto_Poster_Bot_Advertising_ChatArgs = {
  where: Auto_Poster_Bot_Advertising_Chat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auto_Poster_Bot_Advertising_Chat_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Auto_Poster_Bot_PaymentArgs = {
  where: Auto_Poster_Bot_Payment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auto_Poster_Bot_Payment_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Auto_Poster_Bot_PostArgs = {
  where: Auto_Poster_Bot_Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auto_Poster_Bot_Post_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Auto_Poster_Bot_UserArgs = {
  where: Auto_Poster_Bot_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auto_Poster_Bot_User_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Auto_Poster_Bot_User_StatusArgs = {
  where: Auto_Poster_Bot_User_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auto_Poster_Bot_User_Status_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Erp_AccessLevelsArgs = {
  where: Erp_AccessLevels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Erp_AccessLevels_By_PkArgs = {
  AccessLevelID: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Erp_CommentsArgs = {
  where: Erp_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Erp_Comments_By_PkArgs = {
  CommentID: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Erp_DocsArgs = {
  where: Erp_Docs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Erp_Docs_By_PkArgs = {
  ID: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Erp_NotificationsArgs = {
  where: Erp_Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Erp_Notifications_By_PkArgs = {
  ID: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Erp_OrderItemsArgs = {
  where: Erp_OrderItems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Erp_OrderItems_By_PkArgs = {
  OrderItemID: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Erp_OrderStatusArgs = {
  where: Erp_OrderStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Erp_OrderStatus_By_PkArgs = {
  ID: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Erp_OrdersArgs = {
  where: Erp_Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Erp_Orders_By_PkArgs = {
  OrderID: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Erp_PaymentHistoryArgs = {
  where: Erp_PaymentHistory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Erp_PaymentHistory_By_PkArgs = {
  ID: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Erp_TokensArgs = {
  where: Erp_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Erp_Tokens_By_PkArgs = {
  ID: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Erp_UsersArgs = {
  where: Erp_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Erp_Users_By_PkArgs = {
  UserID: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Attendance_ConfigArgs = {
  objects: Array<Attendance_Config_Insert_Input>;
  on_conflict?: InputMaybe<Attendance_Config_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Attendance_Config_OneArgs = {
  object: Attendance_Config_Insert_Input;
  on_conflict?: InputMaybe<Attendance_Config_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Attendance_IntervalsArgs = {
  objects: Array<Attendance_Intervals_Insert_Input>;
  on_conflict?: InputMaybe<Attendance_Intervals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Attendance_Intervals_OneArgs = {
  object: Attendance_Intervals_Insert_Input;
  on_conflict?: InputMaybe<Attendance_Intervals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Attendance_UsersArgs = {
  objects: Array<Attendance_Users_Insert_Input>;
  on_conflict?: InputMaybe<Attendance_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Attendance_Users_OneArgs = {
  object: Attendance_Users_Insert_Input;
  on_conflict?: InputMaybe<Attendance_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auto_Poster_Bot_Advertising_ChatArgs = {
  objects: Array<Auto_Poster_Bot_Advertising_Chat_Insert_Input>;
  on_conflict?: InputMaybe<Auto_Poster_Bot_Advertising_Chat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auto_Poster_Bot_Advertising_Chat_OneArgs = {
  object: Auto_Poster_Bot_Advertising_Chat_Insert_Input;
  on_conflict?: InputMaybe<Auto_Poster_Bot_Advertising_Chat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auto_Poster_Bot_PaymentArgs = {
  objects: Array<Auto_Poster_Bot_Payment_Insert_Input>;
  on_conflict?: InputMaybe<Auto_Poster_Bot_Payment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auto_Poster_Bot_Payment_OneArgs = {
  object: Auto_Poster_Bot_Payment_Insert_Input;
  on_conflict?: InputMaybe<Auto_Poster_Bot_Payment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auto_Poster_Bot_PostArgs = {
  objects: Array<Auto_Poster_Bot_Post_Insert_Input>;
  on_conflict?: InputMaybe<Auto_Poster_Bot_Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auto_Poster_Bot_Post_OneArgs = {
  object: Auto_Poster_Bot_Post_Insert_Input;
  on_conflict?: InputMaybe<Auto_Poster_Bot_Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auto_Poster_Bot_UserArgs = {
  objects: Array<Auto_Poster_Bot_User_Insert_Input>;
  on_conflict?: InputMaybe<Auto_Poster_Bot_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auto_Poster_Bot_User_OneArgs = {
  object: Auto_Poster_Bot_User_Insert_Input;
  on_conflict?: InputMaybe<Auto_Poster_Bot_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auto_Poster_Bot_User_StatusArgs = {
  objects: Array<Auto_Poster_Bot_User_Status_Insert_Input>;
  on_conflict?: InputMaybe<Auto_Poster_Bot_User_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auto_Poster_Bot_User_Status_OneArgs = {
  object: Auto_Poster_Bot_User_Status_Insert_Input;
  on_conflict?: InputMaybe<Auto_Poster_Bot_User_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_AccessLevelsArgs = {
  objects: Array<Erp_AccessLevels_Insert_Input>;
  on_conflict?: InputMaybe<Erp_AccessLevels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_AccessLevels_OneArgs = {
  object: Erp_AccessLevels_Insert_Input;
  on_conflict?: InputMaybe<Erp_AccessLevels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_CommentsArgs = {
  objects: Array<Erp_Comments_Insert_Input>;
  on_conflict?: InputMaybe<Erp_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_Comments_OneArgs = {
  object: Erp_Comments_Insert_Input;
  on_conflict?: InputMaybe<Erp_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_DocsArgs = {
  objects: Array<Erp_Docs_Insert_Input>;
  on_conflict?: InputMaybe<Erp_Docs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_Docs_OneArgs = {
  object: Erp_Docs_Insert_Input;
  on_conflict?: InputMaybe<Erp_Docs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_NotificationsArgs = {
  objects: Array<Erp_Notifications_Insert_Input>;
  on_conflict?: InputMaybe<Erp_Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_Notifications_OneArgs = {
  object: Erp_Notifications_Insert_Input;
  on_conflict?: InputMaybe<Erp_Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_OrderItemsArgs = {
  objects: Array<Erp_OrderItems_Insert_Input>;
  on_conflict?: InputMaybe<Erp_OrderItems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_OrderItems_OneArgs = {
  object: Erp_OrderItems_Insert_Input;
  on_conflict?: InputMaybe<Erp_OrderItems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_OrderStatusArgs = {
  objects: Array<Erp_OrderStatus_Insert_Input>;
  on_conflict?: InputMaybe<Erp_OrderStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_OrderStatus_OneArgs = {
  object: Erp_OrderStatus_Insert_Input;
  on_conflict?: InputMaybe<Erp_OrderStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_OrdersArgs = {
  objects: Array<Erp_Orders_Insert_Input>;
  on_conflict?: InputMaybe<Erp_Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_Orders_OneArgs = {
  object: Erp_Orders_Insert_Input;
  on_conflict?: InputMaybe<Erp_Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_PaymentHistoryArgs = {
  objects: Array<Erp_PaymentHistory_Insert_Input>;
  on_conflict?: InputMaybe<Erp_PaymentHistory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_PaymentHistory_OneArgs = {
  object: Erp_PaymentHistory_Insert_Input;
  on_conflict?: InputMaybe<Erp_PaymentHistory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_TokensArgs = {
  objects: Array<Erp_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Erp_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_Tokens_OneArgs = {
  object: Erp_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Erp_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_UsersArgs = {
  objects: Array<Erp_Users_Insert_Input>;
  on_conflict?: InputMaybe<Erp_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Erp_Users_OneArgs = {
  object: Erp_Users_Insert_Input;
  on_conflict?: InputMaybe<Erp_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Attendance_ConfigArgs = {
  _inc?: InputMaybe<Attendance_Config_Inc_Input>;
  _set?: InputMaybe<Attendance_Config_Set_Input>;
  where: Attendance_Config_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Attendance_Config_By_PkArgs = {
  _inc?: InputMaybe<Attendance_Config_Inc_Input>;
  _set?: InputMaybe<Attendance_Config_Set_Input>;
  pk_columns: Attendance_Config_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Attendance_IntervalsArgs = {
  _inc?: InputMaybe<Attendance_Intervals_Inc_Input>;
  _set?: InputMaybe<Attendance_Intervals_Set_Input>;
  where: Attendance_Intervals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Attendance_Intervals_By_PkArgs = {
  _inc?: InputMaybe<Attendance_Intervals_Inc_Input>;
  _set?: InputMaybe<Attendance_Intervals_Set_Input>;
  pk_columns: Attendance_Intervals_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Attendance_UsersArgs = {
  _inc?: InputMaybe<Attendance_Users_Inc_Input>;
  _set?: InputMaybe<Attendance_Users_Set_Input>;
  where: Attendance_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Attendance_Users_By_PkArgs = {
  _inc?: InputMaybe<Attendance_Users_Inc_Input>;
  _set?: InputMaybe<Attendance_Users_Set_Input>;
  pk_columns: Attendance_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auto_Poster_Bot_Advertising_ChatArgs = {
  _inc?: InputMaybe<Auto_Poster_Bot_Advertising_Chat_Inc_Input>;
  _set?: InputMaybe<Auto_Poster_Bot_Advertising_Chat_Set_Input>;
  where: Auto_Poster_Bot_Advertising_Chat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auto_Poster_Bot_Advertising_Chat_By_PkArgs = {
  _inc?: InputMaybe<Auto_Poster_Bot_Advertising_Chat_Inc_Input>;
  _set?: InputMaybe<Auto_Poster_Bot_Advertising_Chat_Set_Input>;
  pk_columns: Auto_Poster_Bot_Advertising_Chat_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auto_Poster_Bot_PaymentArgs = {
  _inc?: InputMaybe<Auto_Poster_Bot_Payment_Inc_Input>;
  _set?: InputMaybe<Auto_Poster_Bot_Payment_Set_Input>;
  where: Auto_Poster_Bot_Payment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auto_Poster_Bot_Payment_By_PkArgs = {
  _inc?: InputMaybe<Auto_Poster_Bot_Payment_Inc_Input>;
  _set?: InputMaybe<Auto_Poster_Bot_Payment_Set_Input>;
  pk_columns: Auto_Poster_Bot_Payment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auto_Poster_Bot_PostArgs = {
  _inc?: InputMaybe<Auto_Poster_Bot_Post_Inc_Input>;
  _set?: InputMaybe<Auto_Poster_Bot_Post_Set_Input>;
  where: Auto_Poster_Bot_Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auto_Poster_Bot_Post_By_PkArgs = {
  _inc?: InputMaybe<Auto_Poster_Bot_Post_Inc_Input>;
  _set?: InputMaybe<Auto_Poster_Bot_Post_Set_Input>;
  pk_columns: Auto_Poster_Bot_Post_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auto_Poster_Bot_UserArgs = {
  _inc?: InputMaybe<Auto_Poster_Bot_User_Inc_Input>;
  _set?: InputMaybe<Auto_Poster_Bot_User_Set_Input>;
  where: Auto_Poster_Bot_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auto_Poster_Bot_User_By_PkArgs = {
  _inc?: InputMaybe<Auto_Poster_Bot_User_Inc_Input>;
  _set?: InputMaybe<Auto_Poster_Bot_User_Set_Input>;
  pk_columns: Auto_Poster_Bot_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auto_Poster_Bot_User_StatusArgs = {
  _inc?: InputMaybe<Auto_Poster_Bot_User_Status_Inc_Input>;
  _set?: InputMaybe<Auto_Poster_Bot_User_Status_Set_Input>;
  where: Auto_Poster_Bot_User_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auto_Poster_Bot_User_Status_By_PkArgs = {
  _inc?: InputMaybe<Auto_Poster_Bot_User_Status_Inc_Input>;
  _set?: InputMaybe<Auto_Poster_Bot_User_Status_Set_Input>;
  pk_columns: Auto_Poster_Bot_User_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_AccessLevelsArgs = {
  _inc?: InputMaybe<Erp_AccessLevels_Inc_Input>;
  _set?: InputMaybe<Erp_AccessLevels_Set_Input>;
  where: Erp_AccessLevels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_AccessLevels_By_PkArgs = {
  _inc?: InputMaybe<Erp_AccessLevels_Inc_Input>;
  _set?: InputMaybe<Erp_AccessLevels_Set_Input>;
  pk_columns: Erp_AccessLevels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_CommentsArgs = {
  _inc?: InputMaybe<Erp_Comments_Inc_Input>;
  _set?: InputMaybe<Erp_Comments_Set_Input>;
  where: Erp_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_Comments_By_PkArgs = {
  _inc?: InputMaybe<Erp_Comments_Inc_Input>;
  _set?: InputMaybe<Erp_Comments_Set_Input>;
  pk_columns: Erp_Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_DocsArgs = {
  _inc?: InputMaybe<Erp_Docs_Inc_Input>;
  _set?: InputMaybe<Erp_Docs_Set_Input>;
  where: Erp_Docs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_Docs_By_PkArgs = {
  _inc?: InputMaybe<Erp_Docs_Inc_Input>;
  _set?: InputMaybe<Erp_Docs_Set_Input>;
  pk_columns: Erp_Docs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_NotificationsArgs = {
  _inc?: InputMaybe<Erp_Notifications_Inc_Input>;
  _set?: InputMaybe<Erp_Notifications_Set_Input>;
  where: Erp_Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_Notifications_By_PkArgs = {
  _inc?: InputMaybe<Erp_Notifications_Inc_Input>;
  _set?: InputMaybe<Erp_Notifications_Set_Input>;
  pk_columns: Erp_Notifications_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_OrderItemsArgs = {
  _inc?: InputMaybe<Erp_OrderItems_Inc_Input>;
  _set?: InputMaybe<Erp_OrderItems_Set_Input>;
  where: Erp_OrderItems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_OrderItems_By_PkArgs = {
  _inc?: InputMaybe<Erp_OrderItems_Inc_Input>;
  _set?: InputMaybe<Erp_OrderItems_Set_Input>;
  pk_columns: Erp_OrderItems_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_OrderStatusArgs = {
  _inc?: InputMaybe<Erp_OrderStatus_Inc_Input>;
  _set?: InputMaybe<Erp_OrderStatus_Set_Input>;
  where: Erp_OrderStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_OrderStatus_By_PkArgs = {
  _inc?: InputMaybe<Erp_OrderStatus_Inc_Input>;
  _set?: InputMaybe<Erp_OrderStatus_Set_Input>;
  pk_columns: Erp_OrderStatus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_OrdersArgs = {
  _inc?: InputMaybe<Erp_Orders_Inc_Input>;
  _set?: InputMaybe<Erp_Orders_Set_Input>;
  where: Erp_Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_Orders_By_PkArgs = {
  _inc?: InputMaybe<Erp_Orders_Inc_Input>;
  _set?: InputMaybe<Erp_Orders_Set_Input>;
  pk_columns: Erp_Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_PaymentHistoryArgs = {
  _inc?: InputMaybe<Erp_PaymentHistory_Inc_Input>;
  _set?: InputMaybe<Erp_PaymentHistory_Set_Input>;
  where: Erp_PaymentHistory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_PaymentHistory_By_PkArgs = {
  _inc?: InputMaybe<Erp_PaymentHistory_Inc_Input>;
  _set?: InputMaybe<Erp_PaymentHistory_Set_Input>;
  pk_columns: Erp_PaymentHistory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_TokensArgs = {
  _inc?: InputMaybe<Erp_Tokens_Inc_Input>;
  _set?: InputMaybe<Erp_Tokens_Set_Input>;
  where: Erp_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_Tokens_By_PkArgs = {
  _inc?: InputMaybe<Erp_Tokens_Inc_Input>;
  _set?: InputMaybe<Erp_Tokens_Set_Input>;
  pk_columns: Erp_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_UsersArgs = {
  _inc?: InputMaybe<Erp_Users_Inc_Input>;
  _set?: InputMaybe<Erp_Users_Set_Input>;
  where: Erp_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Erp_Users_By_PkArgs = {
  _inc?: InputMaybe<Erp_Users_Inc_Input>;
  _set?: InputMaybe<Erp_Users_Set_Input>;
  pk_columns: Erp_Users_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "attendance.config" */
  attendance_config: Array<Attendance_Config>;
  /** fetch aggregated fields from the table: "attendance.config" */
  attendance_config_aggregate: Attendance_Config_Aggregate;
  /** fetch data from the table: "attendance.config" using primary key columns */
  attendance_config_by_pk?: Maybe<Attendance_Config>;
  /** fetch data from the table: "attendance.intervals" */
  attendance_intervals: Array<Attendance_Intervals>;
  /** fetch aggregated fields from the table: "attendance.intervals" */
  attendance_intervals_aggregate: Attendance_Intervals_Aggregate;
  /** fetch data from the table: "attendance.intervals" using primary key columns */
  attendance_intervals_by_pk?: Maybe<Attendance_Intervals>;
  /** fetch data from the table: "attendance.users" */
  attendance_users: Array<Attendance_Users>;
  /** fetch aggregated fields from the table: "attendance.users" */
  attendance_users_aggregate: Attendance_Users_Aggregate;
  /** fetch data from the table: "attendance.users" using primary key columns */
  attendance_users_by_pk?: Maybe<Attendance_Users>;
  /** fetch data from the table: "auto_poster_bot.advertising_chat" */
  auto_poster_bot_advertising_chat: Array<Auto_Poster_Bot_Advertising_Chat>;
  /** fetch aggregated fields from the table: "auto_poster_bot.advertising_chat" */
  auto_poster_bot_advertising_chat_aggregate: Auto_Poster_Bot_Advertising_Chat_Aggregate;
  /** fetch data from the table: "auto_poster_bot.advertising_chat" using primary key columns */
  auto_poster_bot_advertising_chat_by_pk?: Maybe<Auto_Poster_Bot_Advertising_Chat>;
  /** fetch data from the table: "auto_poster_bot.payment" */
  auto_poster_bot_payment: Array<Auto_Poster_Bot_Payment>;
  /** fetch aggregated fields from the table: "auto_poster_bot.payment" */
  auto_poster_bot_payment_aggregate: Auto_Poster_Bot_Payment_Aggregate;
  /** fetch data from the table: "auto_poster_bot.payment" using primary key columns */
  auto_poster_bot_payment_by_pk?: Maybe<Auto_Poster_Bot_Payment>;
  /** fetch data from the table: "auto_poster_bot.post" */
  auto_poster_bot_post: Array<Auto_Poster_Bot_Post>;
  /** fetch aggregated fields from the table: "auto_poster_bot.post" */
  auto_poster_bot_post_aggregate: Auto_Poster_Bot_Post_Aggregate;
  /** fetch data from the table: "auto_poster_bot.post" using primary key columns */
  auto_poster_bot_post_by_pk?: Maybe<Auto_Poster_Bot_Post>;
  /** fetch data from the table: "auto_poster_bot.user" */
  auto_poster_bot_user: Array<Auto_Poster_Bot_User>;
  /** fetch aggregated fields from the table: "auto_poster_bot.user" */
  auto_poster_bot_user_aggregate: Auto_Poster_Bot_User_Aggregate;
  /** fetch data from the table: "auto_poster_bot.user" using primary key columns */
  auto_poster_bot_user_by_pk?: Maybe<Auto_Poster_Bot_User>;
  /** fetch data from the table: "auto_poster_bot.user_status" */
  auto_poster_bot_user_status: Array<Auto_Poster_Bot_User_Status>;
  /** fetch aggregated fields from the table: "auto_poster_bot.user_status" */
  auto_poster_bot_user_status_aggregate: Auto_Poster_Bot_User_Status_Aggregate;
  /** fetch data from the table: "auto_poster_bot.user_status" using primary key columns */
  auto_poster_bot_user_status_by_pk?: Maybe<Auto_Poster_Bot_User_Status>;
  /** fetch data from the table: "erp.AccessLevels" */
  erp_AccessLevels: Array<Erp_AccessLevels>;
  /** fetch aggregated fields from the table: "erp.AccessLevels" */
  erp_AccessLevels_aggregate: Erp_AccessLevels_Aggregate;
  /** fetch data from the table: "erp.AccessLevels" using primary key columns */
  erp_AccessLevels_by_pk?: Maybe<Erp_AccessLevels>;
  /** fetch data from the table: "erp.Comments" */
  erp_Comments: Array<Erp_Comments>;
  /** fetch aggregated fields from the table: "erp.Comments" */
  erp_Comments_aggregate: Erp_Comments_Aggregate;
  /** fetch data from the table: "erp.Comments" using primary key columns */
  erp_Comments_by_pk?: Maybe<Erp_Comments>;
  /** fetch data from the table: "erp.Docs" */
  erp_Docs: Array<Erp_Docs>;
  /** fetch aggregated fields from the table: "erp.Docs" */
  erp_Docs_aggregate: Erp_Docs_Aggregate;
  /** fetch data from the table: "erp.Docs" using primary key columns */
  erp_Docs_by_pk?: Maybe<Erp_Docs>;
  /** fetch data from the table: "erp.Notifications" */
  erp_Notifications: Array<Erp_Notifications>;
  /** fetch aggregated fields from the table: "erp.Notifications" */
  erp_Notifications_aggregate: Erp_Notifications_Aggregate;
  /** fetch data from the table: "erp.Notifications" using primary key columns */
  erp_Notifications_by_pk?: Maybe<Erp_Notifications>;
  /** fetch data from the table: "erp.OrderItems" */
  erp_OrderItems: Array<Erp_OrderItems>;
  /** fetch aggregated fields from the table: "erp.OrderItems" */
  erp_OrderItems_aggregate: Erp_OrderItems_Aggregate;
  /** fetch data from the table: "erp.OrderItems" using primary key columns */
  erp_OrderItems_by_pk?: Maybe<Erp_OrderItems>;
  /** fetch data from the table: "erp.OrderStatus" */
  erp_OrderStatus: Array<Erp_OrderStatus>;
  /** fetch aggregated fields from the table: "erp.OrderStatus" */
  erp_OrderStatus_aggregate: Erp_OrderStatus_Aggregate;
  /** fetch data from the table: "erp.OrderStatus" using primary key columns */
  erp_OrderStatus_by_pk?: Maybe<Erp_OrderStatus>;
  /** fetch data from the table: "erp.Orders" */
  erp_Orders: Array<Erp_Orders>;
  /** fetch aggregated fields from the table: "erp.Orders" */
  erp_Orders_aggregate: Erp_Orders_Aggregate;
  /** fetch data from the table: "erp.Orders" using primary key columns */
  erp_Orders_by_pk?: Maybe<Erp_Orders>;
  /** fetch data from the table: "erp.PaymentHistory" */
  erp_PaymentHistory: Array<Erp_PaymentHistory>;
  /** fetch aggregated fields from the table: "erp.PaymentHistory" */
  erp_PaymentHistory_aggregate: Erp_PaymentHistory_Aggregate;
  /** fetch data from the table: "erp.PaymentHistory" using primary key columns */
  erp_PaymentHistory_by_pk?: Maybe<Erp_PaymentHistory>;
  /** fetch data from the table: "erp.Tokens" */
  erp_Tokens: Array<Erp_Tokens>;
  /** fetch aggregated fields from the table: "erp.Tokens" */
  erp_Tokens_aggregate: Erp_Tokens_Aggregate;
  /** fetch data from the table: "erp.Tokens" using primary key columns */
  erp_Tokens_by_pk?: Maybe<Erp_Tokens>;
  /** fetch data from the table: "erp.Users" */
  erp_Users: Array<Erp_Users>;
  /** fetch aggregated fields from the table: "erp.Users" */
  erp_Users_aggregate: Erp_Users_Aggregate;
  /** fetch data from the table: "erp.Users" using primary key columns */
  erp_Users_by_pk?: Maybe<Erp_Users>;
};


export type Query_RootAttendance_ConfigArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Config_Order_By>>;
  where?: InputMaybe<Attendance_Config_Bool_Exp>;
};


export type Query_RootAttendance_Config_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Config_Order_By>>;
  where?: InputMaybe<Attendance_Config_Bool_Exp>;
};


export type Query_RootAttendance_Config_By_PkArgs = {
  ID: Scalars['Int'];
};


export type Query_RootAttendance_IntervalsArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Intervals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Intervals_Order_By>>;
  where?: InputMaybe<Attendance_Intervals_Bool_Exp>;
};


export type Query_RootAttendance_Intervals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Intervals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Intervals_Order_By>>;
  where?: InputMaybe<Attendance_Intervals_Bool_Exp>;
};


export type Query_RootAttendance_Intervals_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAttendance_UsersArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Users_Order_By>>;
  where?: InputMaybe<Attendance_Users_Bool_Exp>;
};


export type Query_RootAttendance_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Users_Order_By>>;
  where?: InputMaybe<Attendance_Users_Bool_Exp>;
};


export type Query_RootAttendance_Users_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAuto_Poster_Bot_Advertising_ChatArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_Advertising_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_Advertising_Chat_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_Advertising_Chat_Bool_Exp>;
};


export type Query_RootAuto_Poster_Bot_Advertising_Chat_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_Advertising_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_Advertising_Chat_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_Advertising_Chat_Bool_Exp>;
};


export type Query_RootAuto_Poster_Bot_Advertising_Chat_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootAuto_Poster_Bot_PaymentArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_Payment_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_Payment_Bool_Exp>;
};


export type Query_RootAuto_Poster_Bot_Payment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_Payment_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_Payment_Bool_Exp>;
};


export type Query_RootAuto_Poster_Bot_Payment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAuto_Poster_Bot_PostArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_Post_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_Post_Bool_Exp>;
};


export type Query_RootAuto_Poster_Bot_Post_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_Post_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_Post_Bool_Exp>;
};


export type Query_RootAuto_Poster_Bot_Post_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAuto_Poster_Bot_UserArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_User_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_User_Bool_Exp>;
};


export type Query_RootAuto_Poster_Bot_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_User_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_User_Bool_Exp>;
};


export type Query_RootAuto_Poster_Bot_User_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootAuto_Poster_Bot_User_StatusArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_User_Status_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_User_Status_Bool_Exp>;
};


export type Query_RootAuto_Poster_Bot_User_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_User_Status_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_User_Status_Bool_Exp>;
};


export type Query_RootAuto_Poster_Bot_User_Status_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootErp_AccessLevelsArgs = {
  distinct_on?: InputMaybe<Array<Erp_AccessLevels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_AccessLevels_Order_By>>;
  where?: InputMaybe<Erp_AccessLevels_Bool_Exp>;
};


export type Query_RootErp_AccessLevels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_AccessLevels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_AccessLevels_Order_By>>;
  where?: InputMaybe<Erp_AccessLevels_Bool_Exp>;
};


export type Query_RootErp_AccessLevels_By_PkArgs = {
  AccessLevelID: Scalars['Int'];
};


export type Query_RootErp_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Erp_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Comments_Order_By>>;
  where?: InputMaybe<Erp_Comments_Bool_Exp>;
};


export type Query_RootErp_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Comments_Order_By>>;
  where?: InputMaybe<Erp_Comments_Bool_Exp>;
};


export type Query_RootErp_Comments_By_PkArgs = {
  CommentID: Scalars['Int'];
};


export type Query_RootErp_DocsArgs = {
  distinct_on?: InputMaybe<Array<Erp_Docs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Docs_Order_By>>;
  where?: InputMaybe<Erp_Docs_Bool_Exp>;
};


export type Query_RootErp_Docs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Docs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Docs_Order_By>>;
  where?: InputMaybe<Erp_Docs_Bool_Exp>;
};


export type Query_RootErp_Docs_By_PkArgs = {
  ID: Scalars['Int'];
};


export type Query_RootErp_NotificationsArgs = {
  distinct_on?: InputMaybe<Array<Erp_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Notifications_Order_By>>;
  where?: InputMaybe<Erp_Notifications_Bool_Exp>;
};


export type Query_RootErp_Notifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Notifications_Order_By>>;
  where?: InputMaybe<Erp_Notifications_Bool_Exp>;
};


export type Query_RootErp_Notifications_By_PkArgs = {
  ID: Scalars['Int'];
};


export type Query_RootErp_OrderItemsArgs = {
  distinct_on?: InputMaybe<Array<Erp_OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_OrderItems_Order_By>>;
  where?: InputMaybe<Erp_OrderItems_Bool_Exp>;
};


export type Query_RootErp_OrderItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_OrderItems_Order_By>>;
  where?: InputMaybe<Erp_OrderItems_Bool_Exp>;
};


export type Query_RootErp_OrderItems_By_PkArgs = {
  OrderItemID: Scalars['Int'];
};


export type Query_RootErp_OrderStatusArgs = {
  distinct_on?: InputMaybe<Array<Erp_OrderStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_OrderStatus_Order_By>>;
  where?: InputMaybe<Erp_OrderStatus_Bool_Exp>;
};


export type Query_RootErp_OrderStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_OrderStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_OrderStatus_Order_By>>;
  where?: InputMaybe<Erp_OrderStatus_Bool_Exp>;
};


export type Query_RootErp_OrderStatus_By_PkArgs = {
  ID: Scalars['Int'];
};


export type Query_RootErp_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Erp_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Orders_Order_By>>;
  where?: InputMaybe<Erp_Orders_Bool_Exp>;
};


export type Query_RootErp_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Orders_Order_By>>;
  where?: InputMaybe<Erp_Orders_Bool_Exp>;
};


export type Query_RootErp_Orders_By_PkArgs = {
  OrderID: Scalars['Int'];
};


export type Query_RootErp_PaymentHistoryArgs = {
  distinct_on?: InputMaybe<Array<Erp_PaymentHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_PaymentHistory_Order_By>>;
  where?: InputMaybe<Erp_PaymentHistory_Bool_Exp>;
};


export type Query_RootErp_PaymentHistory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_PaymentHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_PaymentHistory_Order_By>>;
  where?: InputMaybe<Erp_PaymentHistory_Bool_Exp>;
};


export type Query_RootErp_PaymentHistory_By_PkArgs = {
  ID: Scalars['Int'];
};


export type Query_RootErp_TokensArgs = {
  distinct_on?: InputMaybe<Array<Erp_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Tokens_Order_By>>;
  where?: InputMaybe<Erp_Tokens_Bool_Exp>;
};


export type Query_RootErp_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Tokens_Order_By>>;
  where?: InputMaybe<Erp_Tokens_Bool_Exp>;
};


export type Query_RootErp_Tokens_By_PkArgs = {
  ID: Scalars['Int'];
};


export type Query_RootErp_UsersArgs = {
  distinct_on?: InputMaybe<Array<Erp_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Users_Order_By>>;
  where?: InputMaybe<Erp_Users_Bool_Exp>;
};


export type Query_RootErp_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Users_Order_By>>;
  where?: InputMaybe<Erp_Users_Bool_Exp>;
};


export type Query_RootErp_Users_By_PkArgs = {
  UserID: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "attendance.config" */
  attendance_config: Array<Attendance_Config>;
  /** fetch aggregated fields from the table: "attendance.config" */
  attendance_config_aggregate: Attendance_Config_Aggregate;
  /** fetch data from the table: "attendance.config" using primary key columns */
  attendance_config_by_pk?: Maybe<Attendance_Config>;
  /** fetch data from the table: "attendance.intervals" */
  attendance_intervals: Array<Attendance_Intervals>;
  /** fetch aggregated fields from the table: "attendance.intervals" */
  attendance_intervals_aggregate: Attendance_Intervals_Aggregate;
  /** fetch data from the table: "attendance.intervals" using primary key columns */
  attendance_intervals_by_pk?: Maybe<Attendance_Intervals>;
  /** fetch data from the table: "attendance.users" */
  attendance_users: Array<Attendance_Users>;
  /** fetch aggregated fields from the table: "attendance.users" */
  attendance_users_aggregate: Attendance_Users_Aggregate;
  /** fetch data from the table: "attendance.users" using primary key columns */
  attendance_users_by_pk?: Maybe<Attendance_Users>;
  /** fetch data from the table: "auto_poster_bot.advertising_chat" */
  auto_poster_bot_advertising_chat: Array<Auto_Poster_Bot_Advertising_Chat>;
  /** fetch aggregated fields from the table: "auto_poster_bot.advertising_chat" */
  auto_poster_bot_advertising_chat_aggregate: Auto_Poster_Bot_Advertising_Chat_Aggregate;
  /** fetch data from the table: "auto_poster_bot.advertising_chat" using primary key columns */
  auto_poster_bot_advertising_chat_by_pk?: Maybe<Auto_Poster_Bot_Advertising_Chat>;
  /** fetch data from the table: "auto_poster_bot.payment" */
  auto_poster_bot_payment: Array<Auto_Poster_Bot_Payment>;
  /** fetch aggregated fields from the table: "auto_poster_bot.payment" */
  auto_poster_bot_payment_aggregate: Auto_Poster_Bot_Payment_Aggregate;
  /** fetch data from the table: "auto_poster_bot.payment" using primary key columns */
  auto_poster_bot_payment_by_pk?: Maybe<Auto_Poster_Bot_Payment>;
  /** fetch data from the table: "auto_poster_bot.post" */
  auto_poster_bot_post: Array<Auto_Poster_Bot_Post>;
  /** fetch aggregated fields from the table: "auto_poster_bot.post" */
  auto_poster_bot_post_aggregate: Auto_Poster_Bot_Post_Aggregate;
  /** fetch data from the table: "auto_poster_bot.post" using primary key columns */
  auto_poster_bot_post_by_pk?: Maybe<Auto_Poster_Bot_Post>;
  /** fetch data from the table: "auto_poster_bot.user" */
  auto_poster_bot_user: Array<Auto_Poster_Bot_User>;
  /** fetch aggregated fields from the table: "auto_poster_bot.user" */
  auto_poster_bot_user_aggregate: Auto_Poster_Bot_User_Aggregate;
  /** fetch data from the table: "auto_poster_bot.user" using primary key columns */
  auto_poster_bot_user_by_pk?: Maybe<Auto_Poster_Bot_User>;
  /** fetch data from the table: "auto_poster_bot.user_status" */
  auto_poster_bot_user_status: Array<Auto_Poster_Bot_User_Status>;
  /** fetch aggregated fields from the table: "auto_poster_bot.user_status" */
  auto_poster_bot_user_status_aggregate: Auto_Poster_Bot_User_Status_Aggregate;
  /** fetch data from the table: "auto_poster_bot.user_status" using primary key columns */
  auto_poster_bot_user_status_by_pk?: Maybe<Auto_Poster_Bot_User_Status>;
  /** fetch data from the table: "erp.AccessLevels" */
  erp_AccessLevels: Array<Erp_AccessLevels>;
  /** fetch aggregated fields from the table: "erp.AccessLevels" */
  erp_AccessLevels_aggregate: Erp_AccessLevels_Aggregate;
  /** fetch data from the table: "erp.AccessLevels" using primary key columns */
  erp_AccessLevels_by_pk?: Maybe<Erp_AccessLevels>;
  /** fetch data from the table: "erp.Comments" */
  erp_Comments: Array<Erp_Comments>;
  /** fetch aggregated fields from the table: "erp.Comments" */
  erp_Comments_aggregate: Erp_Comments_Aggregate;
  /** fetch data from the table: "erp.Comments" using primary key columns */
  erp_Comments_by_pk?: Maybe<Erp_Comments>;
  /** fetch data from the table: "erp.Docs" */
  erp_Docs: Array<Erp_Docs>;
  /** fetch aggregated fields from the table: "erp.Docs" */
  erp_Docs_aggregate: Erp_Docs_Aggregate;
  /** fetch data from the table: "erp.Docs" using primary key columns */
  erp_Docs_by_pk?: Maybe<Erp_Docs>;
  /** fetch data from the table: "erp.Notifications" */
  erp_Notifications: Array<Erp_Notifications>;
  /** fetch aggregated fields from the table: "erp.Notifications" */
  erp_Notifications_aggregate: Erp_Notifications_Aggregate;
  /** fetch data from the table: "erp.Notifications" using primary key columns */
  erp_Notifications_by_pk?: Maybe<Erp_Notifications>;
  /** fetch data from the table: "erp.OrderItems" */
  erp_OrderItems: Array<Erp_OrderItems>;
  /** fetch aggregated fields from the table: "erp.OrderItems" */
  erp_OrderItems_aggregate: Erp_OrderItems_Aggregate;
  /** fetch data from the table: "erp.OrderItems" using primary key columns */
  erp_OrderItems_by_pk?: Maybe<Erp_OrderItems>;
  /** fetch data from the table: "erp.OrderStatus" */
  erp_OrderStatus: Array<Erp_OrderStatus>;
  /** fetch aggregated fields from the table: "erp.OrderStatus" */
  erp_OrderStatus_aggregate: Erp_OrderStatus_Aggregate;
  /** fetch data from the table: "erp.OrderStatus" using primary key columns */
  erp_OrderStatus_by_pk?: Maybe<Erp_OrderStatus>;
  /** fetch data from the table: "erp.Orders" */
  erp_Orders: Array<Erp_Orders>;
  /** fetch aggregated fields from the table: "erp.Orders" */
  erp_Orders_aggregate: Erp_Orders_Aggregate;
  /** fetch data from the table: "erp.Orders" using primary key columns */
  erp_Orders_by_pk?: Maybe<Erp_Orders>;
  /** fetch data from the table: "erp.PaymentHistory" */
  erp_PaymentHistory: Array<Erp_PaymentHistory>;
  /** fetch aggregated fields from the table: "erp.PaymentHistory" */
  erp_PaymentHistory_aggregate: Erp_PaymentHistory_Aggregate;
  /** fetch data from the table: "erp.PaymentHistory" using primary key columns */
  erp_PaymentHistory_by_pk?: Maybe<Erp_PaymentHistory>;
  /** fetch data from the table: "erp.Tokens" */
  erp_Tokens: Array<Erp_Tokens>;
  /** fetch aggregated fields from the table: "erp.Tokens" */
  erp_Tokens_aggregate: Erp_Tokens_Aggregate;
  /** fetch data from the table: "erp.Tokens" using primary key columns */
  erp_Tokens_by_pk?: Maybe<Erp_Tokens>;
  /** fetch data from the table: "erp.Users" */
  erp_Users: Array<Erp_Users>;
  /** fetch aggregated fields from the table: "erp.Users" */
  erp_Users_aggregate: Erp_Users_Aggregate;
  /** fetch data from the table: "erp.Users" using primary key columns */
  erp_Users_by_pk?: Maybe<Erp_Users>;
};


export type Subscription_RootAttendance_ConfigArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Config_Order_By>>;
  where?: InputMaybe<Attendance_Config_Bool_Exp>;
};


export type Subscription_RootAttendance_Config_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Config_Order_By>>;
  where?: InputMaybe<Attendance_Config_Bool_Exp>;
};


export type Subscription_RootAttendance_Config_By_PkArgs = {
  ID: Scalars['Int'];
};


export type Subscription_RootAttendance_IntervalsArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Intervals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Intervals_Order_By>>;
  where?: InputMaybe<Attendance_Intervals_Bool_Exp>;
};


export type Subscription_RootAttendance_Intervals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Intervals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Intervals_Order_By>>;
  where?: InputMaybe<Attendance_Intervals_Bool_Exp>;
};


export type Subscription_RootAttendance_Intervals_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAttendance_UsersArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Users_Order_By>>;
  where?: InputMaybe<Attendance_Users_Bool_Exp>;
};


export type Subscription_RootAttendance_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Users_Order_By>>;
  where?: InputMaybe<Attendance_Users_Bool_Exp>;
};


export type Subscription_RootAttendance_Users_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAuto_Poster_Bot_Advertising_ChatArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_Advertising_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_Advertising_Chat_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_Advertising_Chat_Bool_Exp>;
};


export type Subscription_RootAuto_Poster_Bot_Advertising_Chat_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_Advertising_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_Advertising_Chat_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_Advertising_Chat_Bool_Exp>;
};


export type Subscription_RootAuto_Poster_Bot_Advertising_Chat_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootAuto_Poster_Bot_PaymentArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_Payment_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_Payment_Bool_Exp>;
};


export type Subscription_RootAuto_Poster_Bot_Payment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_Payment_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_Payment_Bool_Exp>;
};


export type Subscription_RootAuto_Poster_Bot_Payment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAuto_Poster_Bot_PostArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_Post_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_Post_Bool_Exp>;
};


export type Subscription_RootAuto_Poster_Bot_Post_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_Post_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_Post_Bool_Exp>;
};


export type Subscription_RootAuto_Poster_Bot_Post_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAuto_Poster_Bot_UserArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_User_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_User_Bool_Exp>;
};


export type Subscription_RootAuto_Poster_Bot_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_User_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_User_Bool_Exp>;
};


export type Subscription_RootAuto_Poster_Bot_User_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootAuto_Poster_Bot_User_StatusArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_User_Status_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_User_Status_Bool_Exp>;
};


export type Subscription_RootAuto_Poster_Bot_User_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auto_Poster_Bot_User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auto_Poster_Bot_User_Status_Order_By>>;
  where?: InputMaybe<Auto_Poster_Bot_User_Status_Bool_Exp>;
};


export type Subscription_RootAuto_Poster_Bot_User_Status_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootErp_AccessLevelsArgs = {
  distinct_on?: InputMaybe<Array<Erp_AccessLevels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_AccessLevels_Order_By>>;
  where?: InputMaybe<Erp_AccessLevels_Bool_Exp>;
};


export type Subscription_RootErp_AccessLevels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_AccessLevels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_AccessLevels_Order_By>>;
  where?: InputMaybe<Erp_AccessLevels_Bool_Exp>;
};


export type Subscription_RootErp_AccessLevels_By_PkArgs = {
  AccessLevelID: Scalars['Int'];
};


export type Subscription_RootErp_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Erp_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Comments_Order_By>>;
  where?: InputMaybe<Erp_Comments_Bool_Exp>;
};


export type Subscription_RootErp_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Comments_Order_By>>;
  where?: InputMaybe<Erp_Comments_Bool_Exp>;
};


export type Subscription_RootErp_Comments_By_PkArgs = {
  CommentID: Scalars['Int'];
};


export type Subscription_RootErp_DocsArgs = {
  distinct_on?: InputMaybe<Array<Erp_Docs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Docs_Order_By>>;
  where?: InputMaybe<Erp_Docs_Bool_Exp>;
};


export type Subscription_RootErp_Docs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Docs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Docs_Order_By>>;
  where?: InputMaybe<Erp_Docs_Bool_Exp>;
};


export type Subscription_RootErp_Docs_By_PkArgs = {
  ID: Scalars['Int'];
};


export type Subscription_RootErp_NotificationsArgs = {
  distinct_on?: InputMaybe<Array<Erp_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Notifications_Order_By>>;
  where?: InputMaybe<Erp_Notifications_Bool_Exp>;
};


export type Subscription_RootErp_Notifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Notifications_Order_By>>;
  where?: InputMaybe<Erp_Notifications_Bool_Exp>;
};


export type Subscription_RootErp_Notifications_By_PkArgs = {
  ID: Scalars['Int'];
};


export type Subscription_RootErp_OrderItemsArgs = {
  distinct_on?: InputMaybe<Array<Erp_OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_OrderItems_Order_By>>;
  where?: InputMaybe<Erp_OrderItems_Bool_Exp>;
};


export type Subscription_RootErp_OrderItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_OrderItems_Order_By>>;
  where?: InputMaybe<Erp_OrderItems_Bool_Exp>;
};


export type Subscription_RootErp_OrderItems_By_PkArgs = {
  OrderItemID: Scalars['Int'];
};


export type Subscription_RootErp_OrderStatusArgs = {
  distinct_on?: InputMaybe<Array<Erp_OrderStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_OrderStatus_Order_By>>;
  where?: InputMaybe<Erp_OrderStatus_Bool_Exp>;
};


export type Subscription_RootErp_OrderStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_OrderStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_OrderStatus_Order_By>>;
  where?: InputMaybe<Erp_OrderStatus_Bool_Exp>;
};


export type Subscription_RootErp_OrderStatus_By_PkArgs = {
  ID: Scalars['Int'];
};


export type Subscription_RootErp_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Erp_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Orders_Order_By>>;
  where?: InputMaybe<Erp_Orders_Bool_Exp>;
};


export type Subscription_RootErp_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Orders_Order_By>>;
  where?: InputMaybe<Erp_Orders_Bool_Exp>;
};


export type Subscription_RootErp_Orders_By_PkArgs = {
  OrderID: Scalars['Int'];
};


export type Subscription_RootErp_PaymentHistoryArgs = {
  distinct_on?: InputMaybe<Array<Erp_PaymentHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_PaymentHistory_Order_By>>;
  where?: InputMaybe<Erp_PaymentHistory_Bool_Exp>;
};


export type Subscription_RootErp_PaymentHistory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_PaymentHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_PaymentHistory_Order_By>>;
  where?: InputMaybe<Erp_PaymentHistory_Bool_Exp>;
};


export type Subscription_RootErp_PaymentHistory_By_PkArgs = {
  ID: Scalars['Int'];
};


export type Subscription_RootErp_TokensArgs = {
  distinct_on?: InputMaybe<Array<Erp_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Tokens_Order_By>>;
  where?: InputMaybe<Erp_Tokens_Bool_Exp>;
};


export type Subscription_RootErp_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Tokens_Order_By>>;
  where?: InputMaybe<Erp_Tokens_Bool_Exp>;
};


export type Subscription_RootErp_Tokens_By_PkArgs = {
  ID: Scalars['Int'];
};


export type Subscription_RootErp_UsersArgs = {
  distinct_on?: InputMaybe<Array<Erp_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Users_Order_By>>;
  where?: InputMaybe<Erp_Users_Bool_Exp>;
};


export type Subscription_RootErp_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Erp_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Erp_Users_Order_By>>;
  where?: InputMaybe<Erp_Users_Bool_Exp>;
};


export type Subscription_RootErp_Users_By_PkArgs = {
  UserID: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type GetPaymentByPkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPaymentByPkQuery = { __typename?: 'query_root', auto_poster_bot_payment_by_pk?: { __typename?: 'auto_poster_bot_payment', amount: any, date: any, id: number, post_id?: number | null, status: number, client_id: number } | null };

export type GetObservablePaymentsQueryVariables = Exact<{
  _gte: Scalars['timestamptz'];
}>;


export type GetObservablePaymentsQuery = { __typename?: 'query_root', auto_poster_bot_payment: Array<{ __typename?: 'auto_poster_bot_payment', amount: any, client_id: number, date: any, id: number, post_id?: number | null, status: number }> };

export type InsertNewPaymentMutationVariables = Exact<{
  amount: Scalars['numeric'];
  post_id?: InputMaybe<Scalars['Int']>;
  client_id: Scalars['Int'];
}>;


export type InsertNewPaymentMutation = { __typename?: 'mutation_root', insert_auto_poster_bot_payment_one?: { __typename?: 'auto_poster_bot_payment', amount: any, date: any, id: number, post_id?: number | null, status: number } | null };

export type UpdateStatusMutationVariables = Exact<{
  status: Scalars['Int'];
  id: Scalars['Int'];
}>;


export type UpdateStatusMutation = { __typename?: 'mutation_root', update_auto_poster_bot_payment_by_pk?: { __typename?: 'auto_poster_bot_payment', id: number } | null };

export type PostDataFragment = { __typename?: 'auto_poster_bot_post', advertising_chat_id: any, advertising_days: number, client_id: any, id: number, payment_status: number, keyboard?: string | null, passed_moderation: boolean, photo?: string | null, price: any, publication_end_date?: any | null, publication_start_date?: any | null, text: string, publication_hour: number, chat?: { __typename?: 'auto_poster_bot_advertising_chat', id: any, name: string, per_day_price: number, target_audience: string } | null };

export type GetPostByPkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPostByPkQuery = { __typename?: 'query_root', auto_poster_bot_post_by_pk?: { __typename?: 'auto_poster_bot_post', advertising_chat_id: any, advertising_days: number, client_id: any, id: number, payment_status: number, keyboard?: string | null, passed_moderation: boolean, photo?: string | null, price: any, publication_end_date?: any | null, publication_start_date?: any | null, text: string, publication_hour: number, chat?: { __typename?: 'auto_poster_bot_advertising_chat', id: any, name: string, per_day_price: number, target_audience: string } | null } | null };

export type GetProductionPostQueryVariables = Exact<{
  _gte: Scalars['timestamptz'];
}>;


export type GetProductionPostQuery = { __typename?: 'query_root', auto_poster_bot_post: Array<{ __typename?: 'auto_poster_bot_post', advertising_chat_id: any, advertising_days: number, client_id: any, id: number, payment_status: number, keyboard?: string | null, passed_moderation: boolean, photo?: string | null, price: any, publication_end_date?: any | null, publication_start_date?: any | null, text: string, publication_hour: number, chat?: { __typename?: 'auto_poster_bot_advertising_chat', id: any, name: string, per_day_price: number, target_audience: string } | null }> };

export type InserPostMutationVariables = Exact<{
  object: Auto_Poster_Bot_Post_Insert_Input;
}>;


export type InserPostMutation = { __typename?: 'mutation_root', insert_auto_poster_bot_post_one?: { __typename?: 'auto_poster_bot_post', id: number } | null };

export type TakePostIntoProductionMutationVariables = Exact<{
  id: Scalars['Int'];
  publication_start_date: Scalars['timestamptz'];
  publication_end_date: Scalars['timestamptz'];
}>;


export type TakePostIntoProductionMutation = { __typename?: 'mutation_root', update_auto_poster_bot_post_by_pk?: { __typename?: 'auto_poster_bot_post', id: number } | null };

export type AddPaymentIdMutationVariables = Exact<{
  payment_id: Scalars['Int'];
  id: Scalars['Int'];
}>;


export type AddPaymentIdMutation = { __typename?: 'mutation_root', update_auto_poster_bot_post_by_pk?: { __typename?: 'auto_poster_bot_post', id: number, payment_id?: number | null } | null };

export type GetUserByPkQueryVariables = Exact<{
  id: Scalars['bigint'];
}>;


export type GetUserByPkQuery = { __typename?: 'query_root', auto_poster_bot_user_by_pk?: { __typename?: 'auto_poster_bot_user', status_id: number, first_name?: string | null, last_name?: string | null, username: string, id: any, chat_id: any, balance: number, email?: string | null, user_status: { __typename?: 'auto_poster_bot_user_status', id: number, name: string } } | null };

export type InsertUserMutationVariables = Exact<{
  object: Auto_Poster_Bot_User_Insert_Input;
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insert_auto_poster_bot_user_one?: { __typename?: 'auto_poster_bot_user', status_id: number, first_name?: string | null, last_name?: string | null, username: string, id: any, chat_id: any, balance: number, email?: string | null, user_status: { __typename?: 'auto_poster_bot_user_status', id: number, name: string } } | null };

export type IncrementUserBalanceMutationVariables = Exact<{
  id: Scalars['bigint'];
  balance: Scalars['Int'];
}>;


export type IncrementUserBalanceMutation = { __typename?: 'mutation_root', update_auto_poster_bot_user_by_pk?: { __typename?: 'auto_poster_bot_user', id: any, balance: number } | null };

export type GetModeratorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetModeratorsQuery = { __typename?: 'query_root', auto_poster_bot_user: Array<{ __typename?: 'auto_poster_bot_user', status_id: number, id: any, chat_id: any }> };

export const PostDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"auto_poster_bot_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"advertising_chat_id"}},{"kind":"Field","name":{"kind":"Name","value":"advertising_days"}},{"kind":"Field","name":{"kind":"Name","value":"client_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"payment_status"}},{"kind":"Field","name":{"kind":"Name","value":"keyboard"}},{"kind":"Field","name":{"kind":"Name","value":"passed_moderation"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"publication_end_date"}},{"kind":"Field","name":{"kind":"Name","value":"publication_start_date"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"publication_hour"}},{"kind":"Field","name":{"kind":"Name","value":"chat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"per_day_price"}},{"kind":"Field","name":{"kind":"Name","value":"target_audience"}}]}}]}}]} as unknown as DocumentNode<PostDataFragment, unknown>;
export const GetPaymentByPkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPaymentByPK"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auto_poster_bot_payment_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"post_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"client_id"}}]}}]}}]} as unknown as DocumentNode<GetPaymentByPkQuery, GetPaymentByPkQueryVariables>;
export const GetObservablePaymentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetObservablePayments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_gte"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auto_poster_bot_payment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_gte"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"IntValue","value":"0"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"client_id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"post_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetObservablePaymentsQuery, GetObservablePaymentsQueryVariables>;
export const InsertNewPaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertNewPayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"post_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_auto_poster_bot_payment_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"IntValue","value":"0"}},{"kind":"ObjectField","name":{"kind":"Name","value":"post_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"post_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"client_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"post_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<InsertNewPaymentMutation, InsertNewPaymentMutationVariables>;
export const UpdateStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_auto_poster_bot_payment_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateStatusMutation, UpdateStatusMutationVariables>;
export const GetPostByPkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostByPk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auto_poster_bot_post_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postData"}}]}}]}},...PostDataFragmentDoc.definitions]} as unknown as DocumentNode<GetPostByPkQuery, GetPostByPkQueryVariables>;
export const GetProductionPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductionPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_gte"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auto_poster_bot_post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"payment"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"IntValue","value":"1"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"publication_end_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_gte"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postData"}}]}}]}},...PostDataFragmentDoc.definitions]} as unknown as DocumentNode<GetProductionPostQuery, GetProductionPostQueryVariables>;
export const InserPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InserPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"auto_poster_bot_post_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_auto_poster_bot_post_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InserPostMutation, InserPostMutationVariables>;
export const TakePostIntoProductionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"takePostIntoProduction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publication_start_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publication_end_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_auto_poster_bot_post_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"publication_start_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publication_start_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"publication_end_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publication_end_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"passed_moderation"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<TakePostIntoProductionMutation, TakePostIntoProductionMutationVariables>;
export const AddPaymentIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addPaymentId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payment_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_auto_poster_bot_post_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"payment_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payment_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"payment_id"}}]}}]}}]} as unknown as DocumentNode<AddPaymentIdMutation, AddPaymentIdMutationVariables>;
export const GetUserByPkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserByPK"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auto_poster_bot_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status_id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chat_id"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetUserByPkQuery, GetUserByPkQueryVariables>;
export const InsertUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"auto_poster_bot_user_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_auto_poster_bot_user_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status_id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chat_id"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<InsertUserMutation, InsertUserMutationVariables>;
export const IncrementUserBalanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"IncrementUserBalance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"balance"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_auto_poster_bot_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"balance"},"value":{"kind":"Variable","name":{"kind":"Name","value":"balance"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}}]} as unknown as DocumentNode<IncrementUserBalanceMutation, IncrementUserBalanceMutationVariables>;
export const GetModeratorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetModerators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auto_poster_bot_user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chat_id"}}]}}]}}]} as unknown as DocumentNode<GetModeratorsQuery, GetModeratorsQueryVariables>;