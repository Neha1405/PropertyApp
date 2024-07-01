// MainComponent.tsx
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {TextInput} from '../../components';
import {NetworkStatusContext} from '../../utils/NetworkStatusProvider';
import {addToQueue, processQueue} from '../../utils/dataQueue';
import {storeData} from '../../utils/storage/storage';
import uuid from 'react-native-uuid';
import {lightTheme} from '../../utils/styles/themes';

const PropertyDetails: React.FC = () => {
  const [collectionType, setCollectionType] = useState('');
  const [caseFileID, setCaseFileID] = useState('');
  const [lpaID, setLpaID] = useState('');
  const [pdaSubmitterEntity, setPdaSubmitterEntity] = useState('');
  const [pdaHyperlink, setPdaHyperlink] = useState('');
  const [pdaCollectionEntity, setPdaCollectionEntity] = useState('');
  const [propertyDataCollectorType, setPropertyDataCollectorType] =
    useState('');
  const [propertyDataCollectorTypeDesc, setPropertyDataCollectorTypeDesc] =
    useState('');
  const [
    propertyDataCollectorAcknowledgement,
    setPropertyDataCollectorAcknowledgement,
  ] = useState('');
  const [propertyDataCollectorDate, setPropertyDataCollectorDate] =
    useState('');

  const {isConnected} = useContext(NetworkStatusContext);

  const saveData = async () => {
    const data = {
      collectionType,
      caseFileID,
      lpaID,
      pdaSubmitterEntity,
      pdaHyperlink,
      pdaCollectionEntity,
      propertyDataCollectorType,
      propertyDataCollectorTypeDesc,
      propertyDataCollectorAcknowledgement,
      propertyDataCollectorDate,
    };

    const id = uuid.v4();
    await storeData(id, data);
    await addToQueue({id, data});
  };

  useEffect(() => {
    if (isConnected) {
      processQueue(uploadData);
    }
  }, [isConnected]);

  const uploadData = async (data: any) => {
    // Your API call to upload data
    console.log('Uploading data:', data);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={styles.container}>
      <TextInput
        placeholder="Collection Type"
        value={collectionType}
        onChangeText={setCollectionType}
      />
      <TextInput
        placeholder="Case File ID"
        value={caseFileID}
        onChangeText={setCaseFileID}
      />
      <TextInput placeholder="LPA ID" value={lpaID} onChangeText={setLpaID} />
      <TextInput
        placeholder="PDA Submitter Entity"
        value={pdaSubmitterEntity}
        onChangeText={setPdaSubmitterEntity}
      />
      <TextInput
        placeholder="PDA Hyperlink"
        value={pdaHyperlink}
        onChangeText={setPdaHyperlink}
      />
      <TextInput
        placeholder="PDA Collection Entity"
        value={pdaCollectionEntity}
        onChangeText={setPdaCollectionEntity}
      />
      <TextInput
        placeholder="Property Data Collector Type"
        value={propertyDataCollectorType}
        onChangeText={setPropertyDataCollectorType}
      />
      <TextInput
        placeholder="Property Data Collector Type Description"
        value={propertyDataCollectorTypeDesc}
        onChangeText={setPropertyDataCollectorTypeDesc}
      />
      <TextInput
        placeholder="Data Collector Acknowledgement"
        value={propertyDataCollectorAcknowledgement}
        onChangeText={setPropertyDataCollectorAcknowledgement}
      />
      <TextInput
        placeholder="Data Collection Date"
        value={propertyDataCollectorDate}
        onChangeText={setPropertyDataCollectorDate}
      />
      {/* <TouchableOpacity onPress={saveData} style={styles.button}>
        <Text>Save</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flex: 1,
  },
  button: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightTheme.colors.header,
  },
  buttonText: {
    color: lightTheme.colors.white,
    fontSize: 14,
  },
});

export default PropertyDetails;
