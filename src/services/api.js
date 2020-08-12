import axios from 'axios';

export default() => {
    return axios.create({
        baseURL: 'http://test-dev-client-git-esbpcs.apps.ca-central-1.starter.openshift-online.com'
    });
};