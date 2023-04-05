import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sample } from '../assets/sample'
import  NavBar  from '../components/navigation'
// import { Sidebar } from '../components/navigation/sidebar'
// import AddSection from '../components/tables/add_section'
// import Table from '../components/tables/table'
// import { exercise_columns } from '../components/tables/tableheader'
// import { challenges } from '../data/instruction'
import avatar from '../assets/icons/icons/Group 51.svg'
import avatar1 from '../assets/icons/icons/Group 52.svg'
import avatar2 from '../assets/icons/icons/Group 53.svg'
import avatar3 from '../assets/icons/icons/Group 54.svg'
import avatar4 from '../assets/icons/icons/avatar4.jpeg'
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'

import app_api from "../config/config.js"
import moment from 'moment'

const Landing = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [bLoading, setbLoading] = useState(true)
  const [bError, setbError] = useState(null)
  const [batch, setBatch] = useState({})
//   const [sidebarOpen, setSidebarOpen] = useState(false)
  const [ps, setPs] = useState(false)
  const [programSelected, setProgramSelected] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [courses, setCourses] = useState([])
  const [startedId, setStartedId] = useState([])
  const [catLoading, setCatLoading] = useState(true)
  const [catError, setCatError] = useState(null)
  const [category, setCategory] = useState([])
  const [enrolLoading, setEnrolLoading] = useState(false)
  const [enrolError, setEnrolError] = useState(null)

  useEffect(() => {
    try {
      let user = JSON.parse(localStorage.getItem('itkAdminKey'))
      setUser(user)
      app_api
        .get(`course/user/${user?.data?.id}`)
        .then((res) => {
          setLoading(false)
          setError(null)
          setCourses(res.data.data.courses)
          setPs(true)
          setProgramSelected(res.data.data.courses[0])
          setStartedId(res.data.data.startedCourses)
        })
        .catch((err) => {
          setLoading(false)
          setError(err?.response?.data?.message || 'Error getting courses')
        })
      app_api
        .get(`batch/${user?.data?.batchId}`)
        .then((res) => {
          setbLoading(false)
          if (res?.data?.success) {
            setBatch(res.data?.data)
          } else {
            setbError(res?.data?.message)
          }
        })
        .catch((err) => {
          setbLoading(false)
          setbError(err?.response?.data?.message)
        })
    } catch (err) {}
    app_api
      .get('course-category')
      .then((res) => {
        setCatLoading(false)
        setCatError(null)
        setCategory(res.data)
        setSelectedCategory(res.data[0].id)
      })
      .catch((err) => {
        setCatError(err?.response?.data?.message || 'Error getting categories')
        setCatLoading(false)
      })
  }, [])

  const onSelectProgram = (cid) => {
    setPs(true)
    setProgramSelected(courses.find((c) => c.id === cid))
  }

  const [selectedCategory, setSelectedCategory] = useState(null)

  const onSelectCategory = (catid) => {
    setSelectedCategory(catid)
  }

  const clearSelectedCategory = () => {
    setSelectedCategory(null)
  }

  const startCourse = (cid) => {
    if (startedId.map((c) => c.id).includes(cid)) {
      navigate(`/playground/${cid}`)
    } else {
      setEnrolLoading(true)
      app_api
        .post('course-content/add-user', {
          userId: user?.data?.id,
          courseId: cid,
        })
        .then((res) => {
          navigate(`/playground/${cid}`)
          setEnrolError(null)
          setEnrolLoading(false)
        })
        .catch((err) => {
          setEnrolLoading(false)
          setEnrolError(
            err?.response?.data?.message || 'Error starting, please retry'
          )
        })
    }
  }

  const [searchStr, setSearchStr] = useState('')

  const onLogout = () => {
    navigate('/logout')
  }

  let searchReg = new RegExp(
    searchStr.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'),
    'i'
  )

  return (
    <div className="flex flex-row">
    <div className="hidden xs:hidden lg:block md:block">
      <NavBar />
    </div>
    <div className='p-4 h-screen xs:ml-[0em] md:ml-[17em] w-full '>
      <div className="flex flex-col min-h-full max-h-screen mt-5 overflow-x-auto ">
        <div className="flex justify-between px-5">
          <div className="flex items-center w-5/12">
            <label for="search-courses" className="sr-only">
              Search
            </label>
            <div className="relative w-full pr-5">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-6 text-black" />
              </div>
              <input
                type="text"
                id="search-courses"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Search"
                value={searchStr}
                onChange={(e) => setSearchStr(e.target.value)}
              />
            </div>
          </div>

          <div className="flex w-4/12 justify-end items-center">
            <Sample src={avatar4} className="rounded-full mr-1 w-12" />
            <h3 className="px-2 text-sm mr-3">
              {user?.data?.fullName}
              <br></br>
              <span className="text-xs text-gray-500">{user?.data?.email}</span>
            </h3>
            <ArrowRightOnRectangleIcon
              className="h-6 w-6 text-gray-600 cursor-pointer hover:text-sky-800"
              onClick={onLogout}
            />
          </div>
        </div>

        <div className=" lex flex min-h-full max-h-screen mt-5 overflow-x-auto relative">
          <div className="flex justify-between"></div>
          <div className={`${ps ? 'w-full md:w-5/12' : 'w-8/12 mr-5'} px-5`}>
            <div
              className="rounded-lg "
              style={{ backgroundColor: 'rgb(249,251,252)' }}
            >
              {loading ? (
                <p className="p-4">Loading...</p>
              ) : error !== null ? (
                <p className="p-4 text-red-700 text-md">{error}</p>
              ) : courses.filter((c) => {
                  if (selectedCategory !== null)
                    return c.courseCategoryId === selectedCategory
                  return true
                }).length > 0 ? (
                courses.filter((c) => {
                  if (!!searchStr) {
                    return c.name.match(searchReg)
                  } else return c
                }).length > 0 ? (
                  courses
                    .filter((c) => {
                      if (selectedCategory !== null)
                        return c.courseCategoryId === selectedCategory
                      return true
                    })
                    .filter((c) => {
                      if (!!searchStr) {
                        return c.name.match(searchReg)
                      } else return c
                    })
                    .map((c, idx) => (
                      <div
                        key={idx}
                        className="w-full"
                        onClick={() => onSelectProgram(c.id)}
                      >
                        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 transition ease-in-out delay-100 py-4 px-6 rounded-md">
                          <div
                            className="w-32 h-24 flex justify-center items-center rounded-md "
                            style={{ backgroundColor: '#DCF5FF' }}
                          >
                            <Sample className="" url={c.thumbnail} />
                          </div>
                          <div className="flex flex-col w-full pl-2">
                            <div className="flex font-medium text-lg justify-between items-start">
                              <h4 className="font-semibold mb-2 text-md">
                                {c?.name}
                              </h4>
                              <ChevronRightIcon className="h-5" />
                            </div>
                            {startedId.map((c) => c.id).includes(c?.id) ? (
                              <div className="flex justify-between items-center rounded-md">
                                <div
                                  className="w-8/12 h-2 rounded-md "
                                  style={{ backgroundColor: '#DCF5FF' }}
                                >
                                  <div
                                    className="h-2 rounded-md bg-cyan-600"
                                    style={{
                                      width: `${
                                        (startedId.find((ck) => ck.id === c?.id)
                                          ?.progress /
                                          c?.order?.length) *
                                        100
                                      }%`,
                                    }}
                                  ></div>
                                </div>
                                <div
                                  className="rounded-full text-xs px-2 ml-2 font-medium py-1  text-cyan-800"
                                  style={{ backgroundColor: '#DCF5FF' }}
                                >
                                  {
                                    startedId.find((ck) => ck.id === c?.id)
                                      ?.progress
                                  }
                                  /{c?.order?.length}
                                </div>
                              </div>
                            ) : (
                              <div className="flex justify-between items-center rounded-md">
                                <div
                                  className="w-full h-2 rounded-md "
                                  style={{ backgroundColor: '#DCF5FF' }}
                                >
                                  <div
                                    className=" h-2 rounded-md bg-cyan-800"
                                    style={{
                                      width: '0%',
                                    }}
                                  ></div>
                                </div>
                                <div
                                  className="rounded-full text-xs px-2 ml-2 font-medium py-1  text-cyan-800"
                                  style={{ backgroundColor: '#DCF5FF' }}
                                >
                                  0/{c?.order?.length}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                ) : (
                  <p className="p-4 text-sm text-slate-400">
                    No course like this here.
                  </p>
                )
              ) : (
                <p className="p-4 text-sm text-slate-400">
                  More courses coming soon!
                </p>
              )}
            </div>
          </div>
          <div
            className={`${
              ps ? 'w-0 md:w-7/12 md:visible' : 'hidden'
            } d-flex flex-col md:px-5 sticky top-0 overflow-y-auto`}
          >
            <div
              className="rounded-lg  "
              style={{
                backgroundColor: 'rgb(220, 245, 255)',
              }}
            >
              <Sample
                className=" mx-auto rounded-lg drop-shadow-md"
                style={{ height: '300px' }}
                url={programSelected?.cover}
              />
            </div>
            <div className="w-11/12 mx-auto flex flex-col px-7 mt-8">
              <h2 className="text-3xl font-bold text-capitalize">
                {programSelected?.name}
              </h2>
              <p className="text-md text-slate-500 my-2">
                {programSelected?.description}
              </p>
              <div className="flex space-x-5 items-center mt-3">
                <button
                  type="button"
                  className="inline-flex items-center rounded-3xl border border-transparent bg-cyan-800 px-8 py-3 text-sm font-light text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                  onClick={() => startCourse(programSelected?.id)}
                >
                  {startedId.map((c) => c.id).includes(programSelected?.id)
                    ? 'Continue'
                    : 'Start Now'}
                </button>
                <div>
                  <p className="text-lg font-medium">
                    {startedId
                      .map((c) => c.id)
                      .includes(programSelected?.id) ? (
                      "Keep going, you're doing great!"
                    ) : (
                      <span>
                        Enroll to get {programSelected?.totalPoints} points
                      </span>
                    )}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Deadline:{' '}
                    {moment(batch?.startDate)
                      .add(programSelected?.deadline, 'days')
                      .format('DD, MMM YYYY')}
                  </p>
                </div>
              </div>
              
              <div className="pt-8 w-10/12 grid grid-cols-2 grid-rows-2 gap-4 mb-5 border-t border-1 mt-4 pt-7 ps-10">
                <div className="flex space-x-4">
                  <Sample src={avatar} width={40} height={40} />
                  <div className="flex flex-col">
                    <p className="text-md font-bold">
                      {programSelected?.duration}
                    </p>
                    <span className="text-xs text-gray-400">Duration</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Sample src={avatar1} width={40} height={40} />
                  <div className="flex flex-col">
                    <p className="text-md font-bold">
                      {programSelected?.noOfExercises}
                    </p>
                    <span className="text-xs text-gray-400">Exercises</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Sample src={avatar2} width={40} height={40} />
                  <div className="flex flex-col">
                    <p className="text-md font-bold">
                      {programSelected?.noOfProblemSets}
                    </p>
                    <span className="text-xs text-gray-400">Problem Sets</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Sample src={avatar3} width={40} height={40} />
                  <div className="flex flex-col">
                    <p className="text-md font-bold">
                      {programSelected?.noOfReadingMaterial}
                    </p>
                    <span className="text-xs text-gray-400">
                      Reading Materials
                    </span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Landing
