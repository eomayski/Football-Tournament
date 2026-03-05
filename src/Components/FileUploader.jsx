import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setFileData, finalizeUpload, resetData } from '../store/tournamentSlice.js';
import { parseCSV } from '../utils/csvParser.js';
import styles from './FileUploader.module.css';

const FileUploader = () => {
    const dispatch = useDispatch();
    const isLoaded = useSelector((state) => state.tournament.isLoaded);

    const fileConfigs = {
        matches: { label: 'Matches CSV', idKey: 'ID' },
        players: { label: 'Players CSV', idKey: 'ID' },
        records: { label: 'Records CSV', idKey: 'ID' },
        teams: { label: 'Teams CSV', idKey: 'ID' },
    };

    const [files, setFiles] = useState({
        matches: null,
        players: null,
        records: null,
        teams: null,
    });

    const handleFileChange = (e) => {
        const { name, files: selectedFiles } = e.target;
        setFiles((prev) => ({ ...prev, [name]: selectedFiles[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const missing = Object.keys(fileConfigs).filter((key) => !files[key]);
        if (missing.length > 0) {
            toast.error(`Missing files: ${missing.join(', ')}`);
            return;
        }

        try {
            for (const key of Object.keys(files)) {
                const text = await files[key].text();
                const parsedData = parseCSV(text, fileConfigs[key].idKey);
                dispatch(setFileData({ type: key, data: parsedData }));
            }

            dispatch(finalizeUpload());
            toast.success("Data uploaded successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Error occurred in file loading.");
        }
    };

    if (isLoaded) {
        return (
            <div className={styles.uploaderWrapper}>
                <div className={`${styles.uploaderCard} ${styles.textCenter}`}>
                    <p className={styles.successText}>✅ Tournament Data uploaded successfully.</p>
                    <button
                        onClick={() => dispatch(resetData())}
                        className={`${styles.btn} ${styles.btnOutline}`}
                    >
                        Reset Data
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.uploaderWrapper}>
            <form onSubmit={handleSubmit} className={styles.uploaderCard}>
                <h3 className={styles.uploaderTitle}>Upload Data</h3>

                {Object.keys(fileConfigs).map((key) => (
                    <div key={key} className={styles.formGroup}>
                        <span className={styles.formLabel}>
                            {fileConfigs[key].label}:
                        </span>

                        <div className={styles.customFileWrapper}>
                            <label htmlFor={`file-${key}`} className={styles.customFileButton}>
                                Choose File
                            </label>

                            <span className={styles.customFileName}>
                                {files[key] ? files[key].name : 'No file chosen'}
                            </span>

                            <input
                                id={`file-${key}`}
                                type="file"
                                name={key}
                                accept=".csv"
                                onChange={handleFileChange}
                                className={styles.hiddenInput}
                            />
                        </div>
                    </div>
                ))}

                <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
                    Submit Data
                </button>
            </form>
        </div>
    );
};

export default FileUploader;