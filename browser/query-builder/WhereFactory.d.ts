import { WhereExpression } from "./WhereExpression";
export declare class WhereFactory {
    /**
     * Executed to allow the factory to build a WHERE expression with the provided query builder.
     */
    whereFactory: (qb: WhereExpression) => any;
    /**
     * Given a factory that can build a WHERE expression using a query builder.
     */
    constructor(whereFactory: (qb: WhereExpression) => any);
}
