import gql from "graphql-tag";

export const SAVE_CONTENT_MODEL_VIEW = gql`
    mutation SaveContentModelView($id: ID!) {
        cmsManage {
            saveContentModelView(id: $id) {
                error {
                    message
                }
            }
        }
    }
`;

export const CREATE_CONTENT_MODEL_SUBMISSION = gql`
    mutation CreateFormSubmission(
        $id: ID!
        $data: JSON!
        $meta: JSON!
        $reCaptchaResponseToken: String
    ) {
        cmsManage {
            createFormSubmission(
                id: $id
                data: $data
                meta: $meta
                reCaptchaResponseToken: $reCaptchaResponseToken
            ) {
                error {
                    message
                    data
                }
            }
        }
    }
`;
