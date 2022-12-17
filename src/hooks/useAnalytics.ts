import { plainToInstance } from "class-transformer";
import { useEffect, useState } from "react";
import axios from "../API/axios";
import Language from "../models/Language";


const useAnalytics = () => {
    const [languageAnalytics, setLanguageAnalytics] = useState<Language[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        try {
            setIsLoading(true);
            const res = await axios.get("https://mushy-dungarees-dove.cyclic.app/api/analytics");
            setLanguageAnalytics(plainToInstance(Language, res.data.data.data))
        } catch (err: any) {
            console.log("🚀 ~ file: useAnalytics.ts:17 ~ fetch ~ err", err)
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return { languageAnalytics, isLoading, error };
}

export default useAnalytics;