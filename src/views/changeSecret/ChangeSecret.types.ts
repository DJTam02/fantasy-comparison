export interface ChangeSecretState {
    page: string;
    secret: SecretValue;
    oldPassword: SecretValue;
    newPassword: SecretValue;
    newPasswordConfirm: SecretValue;
    currentSecret: string;
}

export interface SecretValue {
    value: string;
    show: boolean;
}

export const instanceOfSecretValue = (object: any): object is SecretValue => {
    return object.value !== undefined && object.show !== undefined;
};
