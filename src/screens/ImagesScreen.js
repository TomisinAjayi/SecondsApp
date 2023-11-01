import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from '../styles/ImageStyle';
import Button from '../components/Button';
import Header from '../components/Header';
import Radio from '../components/Radio';
import ImageListComponent from '../components/ImageListComponent';
import images from '../constants/images';
import icons from '../constants/icons';

//displays images selected below
const SelectedImages = ({selectedImages, deleteSelectedImage}) => {
  return (
    <ScrollView
      style={styles.imagesContainer}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <View style={styles.selectedImagesContainer}>
        {Object.keys(selectedImages).map(imageName => {
          if (selectedImages[imageName]) {
            return (
              <View key={imageName} style={{position: 'relative'}}>
                <Image
                  source={images[imageName]}
                  style={styles.selectedImageNew}
                />
                <TouchableOpacity
                  onPress={() => deleteSelectedImage(imageName)}
                  style={styles.cancelButtonContainer}>
                  <Image source={icons.deleteBtn} style={styles.cancelButton} />
                </TouchableOpacity>
              </View>
            );
          }
        })}
      </View>
    </ScrollView>
  );
};
const ImagesScreen = () => {
  const [checked, setChecked] = useState(false);
  const [selectedImages, setSelectedImages] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedImagesWithNumbers, setSelectedImagesWithNumbers] = useState(
    {},
  );

  //adds image selected to selectedImages
  const toggleImageSelection = imageName => {
    if (checked) {
      const updatedSelectedImages = {...selectedImages};
      if (updatedSelectedImages[imageName]) {
        // If the image is already selected, remove it
        delete updatedSelectedImages[imageName];
      } else {
        // If the image is not selected, add it
        updatedSelectedImages[imageName] = true;
      }

      // Update the selectedImages state and calculate the numbers
      setSelectedImages(updatedSelectedImages);
      const selectedNumbers = Object.keys(updatedSelectedImages).reduce(
        (numbers, imageName, index) => ({
          ...numbers,
          [imageName]: index + 1,
        }),
        {},
      );
      setSelectedImagesWithNumbers(selectedNumbers);
    }
  };

  //checks to see if the values of all images in selected images are false
  const allFalse = Object.values(selectedImages).every(
    value => value === false,
  );

  const deleteSelectedImage = imageName => {
    // Remove the image from selectedImages
    const updatedSelectedImages = {...selectedImages};
    delete updatedSelectedImages[imageName];
    setSelectedImages(updatedSelectedImages);

    // Recalculate the numbers for the remaining selected images
    const updatedSelectedNumbers = Object.keys(updatedSelectedImages).reduce(
      (numbers, imageName, index) => ({
        ...numbers,
        [imageName]: index + 1,
      }),
      {},
    );
    setSelectedImagesWithNumbers(updatedSelectedNumbers);
  };
  //all, photos and videos filtering
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = {
    All: 'All',
    Photos: 'Photos',
    Videos: 'Videos',
  };

  const handleFilterClick = filter => {
    setSelectedFilter(filter);
  };

  //checks if selected images is empty to enable button to be disabled
  const isNotEmpty = Object.keys(selectedImages).length > 0;

  useEffect(() => {
    if (isNotEmpty) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
    if (!checked) {
      setSelectedImages({});
      setSelectedImagesWithNumbers({});
    }
  }, [checked, isNotEmpty]);
  return (
    <View style={styles.container}>
      <Header title={'Recents'} />
      <View style={styles.body}>
        <View style={styles.filterContainer}>
          {Object.keys(filters).map(filter => (
            <Text
              key={filter}
              style={[
                styles.filterText,
                selectedFilter === filters[filter] ? styles.selectedText : null,
              ]}
              onPress={() => handleFilterClick(filters[filter])}>
              {filters[filter]}
            </Text>
          ))}
        </View>
        <FlatList
          data={Object.keys(images)}
          keyExtractor={item => item}
          numColumns={3}
          renderItem={({item}) => (
            <ImageListComponent
              disabled={!checked}
              onPress={() => toggleImageSelection(item)}
              image={images[item]}
              selected={selectedImages[item]}
              checked={checked}
              number={selectedImagesWithNumbers[item]}
            />
          )}
        />
      </View>
      <View style={styles.bottomContainer}>
        {!allFalse &&
          checked === true &&
          Object.keys(selectedImages).length > 0 && (
            <SelectedImages
              selectedImages={selectedImages}
              deleteSelectedImage={deleteSelectedImage}
            />
          )}
        <View style={styles.footer}>
          <Radio
            label="Select Multiple"
            checked={checked}
            onPress={() => setChecked(!checked)}
          />
          <Button
            style={styles.bottom}
            text={'Next'}
            isButtonDisabled={isButtonDisabled}
          />
        </View>
      </View>
    </View>
  );
};

export default ImagesScreen;
