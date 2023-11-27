'use client';

import {
  Box,
  Flex,
  FormLabel,
  Image,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
// import MiniCalendar from 'components/calendar/MiniCalendar';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from 'react-icons/md';
import CheckTable from 'views/admin/default/components/CheckTable';
import ComplexTable from 'views/admin/default/components/ComplexTable';
import DailyTraffic from 'views/admin/default/components/DailyTraffic';
import PieCard from 'views/admin/default/components/PieCard';
import Tasks from 'views/admin/default/components/Tasks';
import TotalSpent from 'views/admin/default/components/TotalSpent';
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue';
import tableDataCheck from 'views/admin/default/variables/tableDataCheck';
import tableDataComplex from 'views/admin/default/variables/tableDataComplex';
// Assets
import Usa from 'img/dashboards/usa.png';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Default() {
  // Chakra Color Mode

  const brandColor = useColorModeValue('accent.primary', 'accent.primary');
  const boxBg = useColorModeValue('bg.dark.secondary', 'bg.dark.secondary');

  const [jobsData, setJobData] = useState([]);
  const [analyticData, setAnalyticalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/v1/ingest/saicsm@gmail.com',
        ); // Replace with your API endpoint
        setJobData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/v1/ingest/analytics/saicsm@gmail.com',
        ); // Replace with your API endpoint
        setAnalyticalData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      {/* <div>
        <h1>Next.js + Axios Example</h1>
        <pre>{JSON.stringify(jobsData, null, 2)}</pre>
      </div> */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="{boxBg}"
              icon={
                <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          name="Total Applications"
          value={analyticData.count}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="{boxBg}"
              icon={
                <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          name="Interested Applications"
          value={analyticData.interested}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="{boxBg}"
              icon={
                <Icon w="28px" h="28px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          name="In Progress Applications"
          value={analyticData.in_progress}
        />{' '}
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="{boxBg}"
              icon={
                <Icon w="28px" h="28px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          name="Applied Applications"
          value={analyticData.applied}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="{boxBg}"
              icon={
                <Icon w="28px" h="28px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          name="Rejected Applications"
          value={analyticData.rejected}
        />
      </SimpleGrid>
      {jobsData.length > 0 ? (
        <>
          <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
            <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
              {analyticData ? (
                <PieCard pieData={analyticData} />
              ) : (
                <div>No Data</div>
              )}
            </SimpleGrid>
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
            <CheckTable
              tableData={jobsData.length > 0 ? jobsData : tableDataCheck}
            />
          </SimpleGrid>
        </>
      ) : (
        <div> No Data </div>
      )}
    </Box>
  );
}
