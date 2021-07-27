/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Coin } from '../cosmos/base/v1beta1/coin';
import { ItemInput, EntriesList, WeightedOutputs } from '../pylons/recipe';
export const protobufPackage = 'Pylonstech.pylons.pylons';
const baseMsgCreateRecipe = {
    creator: '',
    index: '',
    nodeVersion: '',
    cookbookID: '',
    name: '',
    description: '',
    blockInterval: 0,
    enabled: false,
    extraInfo: ''
};
export const MsgCreateRecipe = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.nodeVersion !== '') {
            writer.uint32(26).string(message.nodeVersion);
        }
        if (message.cookbookID !== '') {
            writer.uint32(34).string(message.cookbookID);
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        for (const v of message.coinInputs) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.itemInputs) {
            ItemInput.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.entries !== undefined) {
            EntriesList.encode(message.entries, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.Outputs) {
            WeightedOutputs.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(82).string(message.description);
        }
        if (message.blockInterval !== 0) {
            writer.uint32(88).uint64(message.blockInterval);
        }
        if (message.enabled === true) {
            writer.uint32(96).bool(message.enabled);
        }
        if (message.extraInfo !== '') {
            writer.uint32(106).string(message.extraInfo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateRecipe };
        message.coinInputs = [];
        message.itemInputs = [];
        message.Outputs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.nodeVersion = reader.string();
                    break;
                case 4:
                    message.cookbookID = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.coinInputs.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.itemInputs.push(ItemInput.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.entries = EntriesList.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.Outputs.push(WeightedOutputs.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.description = reader.string();
                    break;
                case 11:
                    message.blockInterval = longToNumber(reader.uint64());
                    break;
                case 12:
                    message.enabled = reader.bool();
                    break;
                case 13:
                    message.extraInfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateRecipe };
        message.coinInputs = [];
        message.itemInputs = [];
        message.Outputs = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.nodeVersion !== undefined && object.nodeVersion !== null) {
            message.nodeVersion = String(object.nodeVersion);
        }
        else {
            message.nodeVersion = '';
        }
        if (object.cookbookID !== undefined && object.cookbookID !== null) {
            message.cookbookID = String(object.cookbookID);
        }
        else {
            message.cookbookID = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.coinInputs !== undefined && object.coinInputs !== null) {
            for (const e of object.coinInputs) {
                message.coinInputs.push(Coin.fromJSON(e));
            }
        }
        if (object.itemInputs !== undefined && object.itemInputs !== null) {
            for (const e of object.itemInputs) {
                message.itemInputs.push(ItemInput.fromJSON(e));
            }
        }
        if (object.entries !== undefined && object.entries !== null) {
            message.entries = EntriesList.fromJSON(object.entries);
        }
        else {
            message.entries = undefined;
        }
        if (object.Outputs !== undefined && object.Outputs !== null) {
            for (const e of object.Outputs) {
                message.Outputs.push(WeightedOutputs.fromJSON(e));
            }
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.blockInterval !== undefined && object.blockInterval !== null) {
            message.blockInterval = Number(object.blockInterval);
        }
        else {
            message.blockInterval = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.extraInfo !== undefined && object.extraInfo !== null) {
            message.extraInfo = String(object.extraInfo);
        }
        else {
            message.extraInfo = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.nodeVersion !== undefined && (obj.nodeVersion = message.nodeVersion);
        message.cookbookID !== undefined && (obj.cookbookID = message.cookbookID);
        message.name !== undefined && (obj.name = message.name);
        if (message.coinInputs) {
            obj.coinInputs = message.coinInputs.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.coinInputs = [];
        }
        if (message.itemInputs) {
            obj.itemInputs = message.itemInputs.map((e) => (e ? ItemInput.toJSON(e) : undefined));
        }
        else {
            obj.itemInputs = [];
        }
        message.entries !== undefined && (obj.entries = message.entries ? EntriesList.toJSON(message.entries) : undefined);
        if (message.Outputs) {
            obj.Outputs = message.Outputs.map((e) => (e ? WeightedOutputs.toJSON(e) : undefined));
        }
        else {
            obj.Outputs = [];
        }
        message.description !== undefined && (obj.description = message.description);
        message.blockInterval !== undefined && (obj.blockInterval = message.blockInterval);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.extraInfo !== undefined && (obj.extraInfo = message.extraInfo);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateRecipe };
        message.coinInputs = [];
        message.itemInputs = [];
        message.Outputs = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.nodeVersion !== undefined && object.nodeVersion !== null) {
            message.nodeVersion = object.nodeVersion;
        }
        else {
            message.nodeVersion = '';
        }
        if (object.cookbookID !== undefined && object.cookbookID !== null) {
            message.cookbookID = object.cookbookID;
        }
        else {
            message.cookbookID = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.coinInputs !== undefined && object.coinInputs !== null) {
            for (const e of object.coinInputs) {
                message.coinInputs.push(Coin.fromPartial(e));
            }
        }
        if (object.itemInputs !== undefined && object.itemInputs !== null) {
            for (const e of object.itemInputs) {
                message.itemInputs.push(ItemInput.fromPartial(e));
            }
        }
        if (object.entries !== undefined && object.entries !== null) {
            message.entries = EntriesList.fromPartial(object.entries);
        }
        else {
            message.entries = undefined;
        }
        if (object.Outputs !== undefined && object.Outputs !== null) {
            for (const e of object.Outputs) {
                message.Outputs.push(WeightedOutputs.fromPartial(e));
            }
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.blockInterval !== undefined && object.blockInterval !== null) {
            message.blockInterval = object.blockInterval;
        }
        else {
            message.blockInterval = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.extraInfo !== undefined && object.extraInfo !== null) {
            message.extraInfo = object.extraInfo;
        }
        else {
            message.extraInfo = '';
        }
        return message;
    }
};
const baseMsgCreateRecipeResponse = {};
export const MsgCreateRecipeResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateRecipeResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateRecipeResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateRecipeResponse };
        return message;
    }
};
const baseMsgUpdateRecipe = {
    creator: '',
    index: '',
    nodeVersion: '',
    cookbookID: '',
    name: '',
    description: '',
    blockInterval: 0,
    enabled: false,
    extraInfo: ''
};
export const MsgUpdateRecipe = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.nodeVersion !== '') {
            writer.uint32(26).string(message.nodeVersion);
        }
        if (message.cookbookID !== '') {
            writer.uint32(34).string(message.cookbookID);
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        for (const v of message.coinInputs) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.itemInputs) {
            ItemInput.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.entries !== undefined) {
            EntriesList.encode(message.entries, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.Outputs) {
            WeightedOutputs.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(82).string(message.description);
        }
        if (message.blockInterval !== 0) {
            writer.uint32(88).uint64(message.blockInterval);
        }
        if (message.enabled === true) {
            writer.uint32(96).bool(message.enabled);
        }
        if (message.extraInfo !== '') {
            writer.uint32(106).string(message.extraInfo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateRecipe };
        message.coinInputs = [];
        message.itemInputs = [];
        message.Outputs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.nodeVersion = reader.string();
                    break;
                case 4:
                    message.cookbookID = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.coinInputs.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.itemInputs.push(ItemInput.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.entries = EntriesList.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.Outputs.push(WeightedOutputs.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.description = reader.string();
                    break;
                case 11:
                    message.blockInterval = longToNumber(reader.uint64());
                    break;
                case 12:
                    message.enabled = reader.bool();
                    break;
                case 13:
                    message.extraInfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateRecipe };
        message.coinInputs = [];
        message.itemInputs = [];
        message.Outputs = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.nodeVersion !== undefined && object.nodeVersion !== null) {
            message.nodeVersion = String(object.nodeVersion);
        }
        else {
            message.nodeVersion = '';
        }
        if (object.cookbookID !== undefined && object.cookbookID !== null) {
            message.cookbookID = String(object.cookbookID);
        }
        else {
            message.cookbookID = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.coinInputs !== undefined && object.coinInputs !== null) {
            for (const e of object.coinInputs) {
                message.coinInputs.push(Coin.fromJSON(e));
            }
        }
        if (object.itemInputs !== undefined && object.itemInputs !== null) {
            for (const e of object.itemInputs) {
                message.itemInputs.push(ItemInput.fromJSON(e));
            }
        }
        if (object.entries !== undefined && object.entries !== null) {
            message.entries = EntriesList.fromJSON(object.entries);
        }
        else {
            message.entries = undefined;
        }
        if (object.Outputs !== undefined && object.Outputs !== null) {
            for (const e of object.Outputs) {
                message.Outputs.push(WeightedOutputs.fromJSON(e));
            }
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.blockInterval !== undefined && object.blockInterval !== null) {
            message.blockInterval = Number(object.blockInterval);
        }
        else {
            message.blockInterval = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.extraInfo !== undefined && object.extraInfo !== null) {
            message.extraInfo = String(object.extraInfo);
        }
        else {
            message.extraInfo = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.nodeVersion !== undefined && (obj.nodeVersion = message.nodeVersion);
        message.cookbookID !== undefined && (obj.cookbookID = message.cookbookID);
        message.name !== undefined && (obj.name = message.name);
        if (message.coinInputs) {
            obj.coinInputs = message.coinInputs.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.coinInputs = [];
        }
        if (message.itemInputs) {
            obj.itemInputs = message.itemInputs.map((e) => (e ? ItemInput.toJSON(e) : undefined));
        }
        else {
            obj.itemInputs = [];
        }
        message.entries !== undefined && (obj.entries = message.entries ? EntriesList.toJSON(message.entries) : undefined);
        if (message.Outputs) {
            obj.Outputs = message.Outputs.map((e) => (e ? WeightedOutputs.toJSON(e) : undefined));
        }
        else {
            obj.Outputs = [];
        }
        message.description !== undefined && (obj.description = message.description);
        message.blockInterval !== undefined && (obj.blockInterval = message.blockInterval);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.extraInfo !== undefined && (obj.extraInfo = message.extraInfo);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateRecipe };
        message.coinInputs = [];
        message.itemInputs = [];
        message.Outputs = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.nodeVersion !== undefined && object.nodeVersion !== null) {
            message.nodeVersion = object.nodeVersion;
        }
        else {
            message.nodeVersion = '';
        }
        if (object.cookbookID !== undefined && object.cookbookID !== null) {
            message.cookbookID = object.cookbookID;
        }
        else {
            message.cookbookID = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.coinInputs !== undefined && object.coinInputs !== null) {
            for (const e of object.coinInputs) {
                message.coinInputs.push(Coin.fromPartial(e));
            }
        }
        if (object.itemInputs !== undefined && object.itemInputs !== null) {
            for (const e of object.itemInputs) {
                message.itemInputs.push(ItemInput.fromPartial(e));
            }
        }
        if (object.entries !== undefined && object.entries !== null) {
            message.entries = EntriesList.fromPartial(object.entries);
        }
        else {
            message.entries = undefined;
        }
        if (object.Outputs !== undefined && object.Outputs !== null) {
            for (const e of object.Outputs) {
                message.Outputs.push(WeightedOutputs.fromPartial(e));
            }
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.blockInterval !== undefined && object.blockInterval !== null) {
            message.blockInterval = object.blockInterval;
        }
        else {
            message.blockInterval = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.extraInfo !== undefined && object.extraInfo !== null) {
            message.extraInfo = object.extraInfo;
        }
        else {
            message.extraInfo = '';
        }
        return message;
    }
};
const baseMsgUpdateRecipeResponse = {};
export const MsgUpdateRecipeResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateRecipeResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateRecipeResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateRecipeResponse };
        return message;
    }
};
const baseMsgCreateCookbook = {
    creator: '',
    index: '',
    nodeVersion: '',
    name: '',
    description: '',
    developer: '',
    version: '',
    supportEmail: '',
    level: 0,
    costPerBlock: 0,
    enabled: false
};
export const MsgCreateCookbook = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.nodeVersion !== '') {
            writer.uint32(26).string(message.nodeVersion);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.developer !== '') {
            writer.uint32(50).string(message.developer);
        }
        if (message.version !== '') {
            writer.uint32(58).string(message.version);
        }
        if (message.supportEmail !== '') {
            writer.uint32(66).string(message.supportEmail);
        }
        if (message.level !== 0) {
            writer.uint32(72).int64(message.level);
        }
        if (message.costPerBlock !== 0) {
            writer.uint32(80).uint64(message.costPerBlock);
        }
        if (message.enabled === true) {
            writer.uint32(88).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCookbook };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.nodeVersion = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.developer = reader.string();
                    break;
                case 7:
                    message.version = reader.string();
                    break;
                case 8:
                    message.supportEmail = reader.string();
                    break;
                case 9:
                    message.level = longToNumber(reader.int64());
                    break;
                case 10:
                    message.costPerBlock = longToNumber(reader.uint64());
                    break;
                case 11:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateCookbook };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.nodeVersion !== undefined && object.nodeVersion !== null) {
            message.nodeVersion = String(object.nodeVersion);
        }
        else {
            message.nodeVersion = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.developer !== undefined && object.developer !== null) {
            message.developer = String(object.developer);
        }
        else {
            message.developer = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = '';
        }
        if (object.supportEmail !== undefined && object.supportEmail !== null) {
            message.supportEmail = String(object.supportEmail);
        }
        else {
            message.supportEmail = '';
        }
        if (object.level !== undefined && object.level !== null) {
            message.level = Number(object.level);
        }
        else {
            message.level = 0;
        }
        if (object.costPerBlock !== undefined && object.costPerBlock !== null) {
            message.costPerBlock = Number(object.costPerBlock);
        }
        else {
            message.costPerBlock = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.nodeVersion !== undefined && (obj.nodeVersion = message.nodeVersion);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.developer !== undefined && (obj.developer = message.developer);
        message.version !== undefined && (obj.version = message.version);
        message.supportEmail !== undefined && (obj.supportEmail = message.supportEmail);
        message.level !== undefined && (obj.level = message.level);
        message.costPerBlock !== undefined && (obj.costPerBlock = message.costPerBlock);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateCookbook };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.nodeVersion !== undefined && object.nodeVersion !== null) {
            message.nodeVersion = object.nodeVersion;
        }
        else {
            message.nodeVersion = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.developer !== undefined && object.developer !== null) {
            message.developer = object.developer;
        }
        else {
            message.developer = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = '';
        }
        if (object.supportEmail !== undefined && object.supportEmail !== null) {
            message.supportEmail = object.supportEmail;
        }
        else {
            message.supportEmail = '';
        }
        if (object.level !== undefined && object.level !== null) {
            message.level = object.level;
        }
        else {
            message.level = 0;
        }
        if (object.costPerBlock !== undefined && object.costPerBlock !== null) {
            message.costPerBlock = object.costPerBlock;
        }
        else {
            message.costPerBlock = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        return message;
    }
};
const baseMsgCreateCookbookResponse = {};
export const MsgCreateCookbookResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCookbookResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateCookbookResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateCookbookResponse };
        return message;
    }
};
const baseMsgUpdateCookbook = {
    creator: '',
    index: '',
    nodeVersion: '',
    name: '',
    description: '',
    developer: '',
    version: '',
    supportEmail: '',
    level: 0,
    costPerBlock: 0,
    enabled: false
};
export const MsgUpdateCookbook = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.nodeVersion !== '') {
            writer.uint32(26).string(message.nodeVersion);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.developer !== '') {
            writer.uint32(50).string(message.developer);
        }
        if (message.version !== '') {
            writer.uint32(58).string(message.version);
        }
        if (message.supportEmail !== '') {
            writer.uint32(66).string(message.supportEmail);
        }
        if (message.level !== 0) {
            writer.uint32(72).int64(message.level);
        }
        if (message.costPerBlock !== 0) {
            writer.uint32(80).uint64(message.costPerBlock);
        }
        if (message.enabled === true) {
            writer.uint32(88).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCookbook };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.nodeVersion = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.developer = reader.string();
                    break;
                case 7:
                    message.version = reader.string();
                    break;
                case 8:
                    message.supportEmail = reader.string();
                    break;
                case 9:
                    message.level = longToNumber(reader.int64());
                    break;
                case 10:
                    message.costPerBlock = longToNumber(reader.uint64());
                    break;
                case 11:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateCookbook };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.nodeVersion !== undefined && object.nodeVersion !== null) {
            message.nodeVersion = String(object.nodeVersion);
        }
        else {
            message.nodeVersion = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.developer !== undefined && object.developer !== null) {
            message.developer = String(object.developer);
        }
        else {
            message.developer = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = '';
        }
        if (object.supportEmail !== undefined && object.supportEmail !== null) {
            message.supportEmail = String(object.supportEmail);
        }
        else {
            message.supportEmail = '';
        }
        if (object.level !== undefined && object.level !== null) {
            message.level = Number(object.level);
        }
        else {
            message.level = 0;
        }
        if (object.costPerBlock !== undefined && object.costPerBlock !== null) {
            message.costPerBlock = Number(object.costPerBlock);
        }
        else {
            message.costPerBlock = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.nodeVersion !== undefined && (obj.nodeVersion = message.nodeVersion);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.developer !== undefined && (obj.developer = message.developer);
        message.version !== undefined && (obj.version = message.version);
        message.supportEmail !== undefined && (obj.supportEmail = message.supportEmail);
        message.level !== undefined && (obj.level = message.level);
        message.costPerBlock !== undefined && (obj.costPerBlock = message.costPerBlock);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateCookbook };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.nodeVersion !== undefined && object.nodeVersion !== null) {
            message.nodeVersion = object.nodeVersion;
        }
        else {
            message.nodeVersion = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.developer !== undefined && object.developer !== null) {
            message.developer = object.developer;
        }
        else {
            message.developer = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = '';
        }
        if (object.supportEmail !== undefined && object.supportEmail !== null) {
            message.supportEmail = object.supportEmail;
        }
        else {
            message.supportEmail = '';
        }
        if (object.level !== undefined && object.level !== null) {
            message.level = object.level;
        }
        else {
            message.level = 0;
        }
        if (object.costPerBlock !== undefined && object.costPerBlock !== null) {
            message.costPerBlock = object.costPerBlock;
        }
        else {
            message.costPerBlock = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        return message;
    }
};
const baseMsgUpdateCookbookResponse = {};
export const MsgUpdateCookbookResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCookbookResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateCookbookResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateCookbookResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateRecipe(request) {
        const data = MsgCreateRecipe.encode(request).finish();
        const promise = this.rpc.request('Pylonstech.pylons.pylons.Msg', 'CreateRecipe', data);
        return promise.then((data) => MsgCreateRecipeResponse.decode(new Reader(data)));
    }
    UpdateRecipe(request) {
        const data = MsgUpdateRecipe.encode(request).finish();
        const promise = this.rpc.request('Pylonstech.pylons.pylons.Msg', 'UpdateRecipe', data);
        return promise.then((data) => MsgUpdateRecipeResponse.decode(new Reader(data)));
    }
    CreateCookbook(request) {
        const data = MsgCreateCookbook.encode(request).finish();
        const promise = this.rpc.request('Pylonstech.pylons.pylons.Msg', 'CreateCookbook', data);
        return promise.then((data) => MsgCreateCookbookResponse.decode(new Reader(data)));
    }
    UpdateCookbook(request) {
        const data = MsgUpdateCookbook.encode(request).finish();
        const promise = this.rpc.request('Pylonstech.pylons.pylons.Msg', 'UpdateCookbook', data);
        return promise.then((data) => MsgUpdateCookbookResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
