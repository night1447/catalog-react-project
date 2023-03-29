import {useCallback, useState} from "react";
import axios from "axios";

export const useHttp = () => {
    const [hasLoading, setHasLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const request = useCallback(async (url: string, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        setHasLoading(true);
        try {
            const response = axios(url, {
                method,
                data: {
                    body
                },
            });
            const answer = await response;
            if (answer.status === 200) {
                setHasLoading(false);
                return answer.data;
            } else {
                setHasLoading(false);
                setHasError(true);
                throw new Error();
            }
        } catch (error) {
            setHasError(true);
            setHasLoading(false);
            return error;
        }
    }, [])

    const clearError = useCallback(() => {
        setHasError(false);
    }, [])

    return {hasLoading, request, hasError, clearError};
}