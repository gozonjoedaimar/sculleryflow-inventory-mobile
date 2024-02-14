export default {};

declare global {
    type RootStackParamList = {
        Selection: undefined;
        Inventory: {
            type: 'kitchen'|'stockroom';
        };
    }
}