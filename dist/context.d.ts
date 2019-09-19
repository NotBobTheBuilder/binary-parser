import { Parser } from './binary_parser';
export declare class Context {
    code: string;
    scopes: string[][];
    bitFields: Parser[];
    tmpVariableCount: number;
    references: {
        [key: string]: {
            resolved: boolean;
            requested: boolean;
        };
    };
    functionReferences: {
        [key: string]: Function;
    };
    functionReferencesCounter: number;
    generateVariable(name?: string): string;
    generateOption(val: number | string | Function): string;
    generateError(err: string): void;
    generateTmpVariable(): string;
    generateFunctionReference(fn: Function): string;
    pushCode(code: string): void;
    pushPath(name: string): void;
    popPath(name: string): void;
    pushScope(name: string): void;
    popScope(): void;
    addReference(alias: string): void;
    markResolved(alias: string): void;
    markRequested(aliasList: string[]): void;
    getUnresolvedReferences(): string[];
}
//# sourceMappingURL=context.d.ts.map