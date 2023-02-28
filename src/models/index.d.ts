import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender?: string | null;
  readonly commentedAt?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender?: string | null;
  readonly commentedAt?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerReactions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reactions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender?: string | null;
  readonly reactedAt?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReactions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reactions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender?: string | null;
  readonly reactedAt?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reactions = LazyLoading extends LazyLoadingDisabled ? EagerReactions : LazyReactions

export declare const Reactions: (new (init: ModelInit<Reactions>) => Reactions) & {
  copyOf(source: Reactions, mutator: (draft: MutableModel<Reactions>) => MutableModel<Reactions> | void): Reactions;
}

type EagerKarma = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Karma, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender: string;
  readonly receiver: string;
  readonly message: string;
  readonly type: string;
  readonly tokenId?: string | null;
  readonly state?: string | null;
  readonly sentAt?: string | null;
  readonly respondedAt?: string | null;
  readonly minted?: boolean | null;
  readonly batchId?: string | null;
  readonly status?: string | null;
  readonly expiresAt?: string | null;
  readonly comments?: (string | null)[] | null;
  readonly reactions?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyKarma = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Karma, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender: string;
  readonly receiver: string;
  readonly message: string;
  readonly type: string;
  readonly tokenId?: string | null;
  readonly state?: string | null;
  readonly sentAt?: string | null;
  readonly respondedAt?: string | null;
  readonly minted?: boolean | null;
  readonly batchId?: string | null;
  readonly status?: string | null;
  readonly expiresAt?: string | null;
  readonly comments?: (string | null)[] | null;
  readonly reactions?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Karma = LazyLoading extends LazyLoadingDisabled ? EagerKarma : LazyKarma

export declare const Karma: (new (init: ModelInit<Karma>) => Karma) & {
  copyOf(source: Karma, mutator: (draft: MutableModel<Karma>) => MutableModel<Karma> | void): Karma;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phoneNumber: string;
  readonly walletAddress?: string | null;
  readonly dailyKarmaAllotted?: string | null;
  readonly lastKarmaAllottedTime?: string | null;
  readonly friends?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phoneNumber: string;
  readonly walletAddress?: string | null;
  readonly dailyKarmaAllotted?: string | null;
  readonly lastKarmaAllottedTime?: string | null;
  readonly friends?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}