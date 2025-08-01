import React from 'react';

import {SchoolHomeCertificatsModal, SchoolHomeCurriculamModal} from "features/schoolHome";
import {SchoolHomeExtracurricus, Calendar} from "entities/schoolHome";

export const SchoolHomeEducationPage = () => {
    return (
        <>
            <SchoolHomeCurriculamModal/>
            <SchoolHomeCertificatsModal/>
            <SchoolHomeExtracurricus/>
            <Calendar/>
        </>
    );
}
