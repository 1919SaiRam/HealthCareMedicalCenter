import React from 'react';
import styles from './SpecialisationSection.module.css';

const imagePaths = [
    { path: require('../assets/spe1.png'), alt: 'Specialization Image 1' },
    { path: require('../assets/spe2.png'), alt: 'Specialization Image 2' },
    { path: require('../assets/spe3.png'), alt: 'Specialization Image 3' },
    { path: require('../assets/spe4.png'), alt: 'Specialization Image 4' },
    { path: require('../assets/spe5.png'), alt: 'Specialization Image 5' },
    { path: require('../assets/spe6.png'), alt: 'Specialization Image 6' },
    { path: require('../assets/spe7.png'), alt: 'Specialization Image 7' },
    { path: require('../assets/spe8.png'), alt: 'Specialization Image 8' },
];

function SpecialisationSection() {
    return (
        <div className={styles.specialisationSectionWrapper}>
            <p className={styles.title}>Find by Specialisation</p>

            {/* Map over the array of image paths and render each image */}
            <div className={styles.imageContainer}>
                {imagePaths.map((item, index) => (
                    <img key={index} src={item.path} alt={item.alt} className={styles.image} />
                ))}
            </div>

            <button className={styles.viewAllButton}>View All</button>
        </div>
    );
}

export default SpecialisationSection;
