// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import Information from 'views/admin/profile/components/Information';
import { useEffect, useState } from 'react';
import axios from 'axios';
// Assets
export default function GeneralInformation(props: { [x: string]: any }) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'gray.400';
  const cardShadow = useColorModeValue(
    '0px 18px 40px rgba(112, 144, 176, 0.12)',
    'unset',
  );

  const [profileData, setProfileData] = useState({});
  const [skills, setSkillsData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/v1/ingest/user/sai@gmail.com',
        ); // Replace with your API endpoint
        setProfileData(response.data[0]);
        setSkillsData(response.data[0].skills);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Card mb={{ base: '0px', '2xl': '20px' }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        {profileData.first_name}
      </Text>
      {/* <Text color={textColorSecondary} fontSize="md" me="26px" mb="40px">
        As we live, our hearts turn colder. Cause pain is what we go through as
        we become older. We get insulted by others, lose trust for those others.
        We get back stabbed by friends. It becomes harder for us to give others
        a hand. We get our heart broken by people we love, even that we give
        them all...
      </Text> */}
      <SimpleGrid columns={2} gap="20px">
        <Information
          boxShadow={cardShadow}
          title="Education"
          value={profileData.education}
        />
        <Information
          boxShadow={cardShadow}
          title="Email"
          value={profileData.email}
        />
        <Information
          boxShadow={cardShadow}
          title="Skills"
          value={skills.toString()}
        />
        <Information
          boxShadow={cardShadow}
          title="Location"
          value={profileData.location}
        />
        <Information
          boxShadow={cardShadow}
          title="Work History"
          value={profileData.work_history}
        />
        <Information
          boxShadow={cardShadow}
          title="Birthday"
          value={profileData.dob}
        />
      </SimpleGrid>
    </Card>
  );
}
