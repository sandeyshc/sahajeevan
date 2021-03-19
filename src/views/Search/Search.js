import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { Form, Image, Button } from "react-bootstrap";
import {
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  Select,
  MenuItem,
  Chip,
  Input,
  TextField
} from "@material-ui/core";

import "./Search.scss";
import { Layout } from "../../components";
import Hero from "../../assets/images/Search/hero.png";
import SaveSearch from "../../assets/icons/svg icon/search-interface-symbol.svg";
import Save from "../../assets/icons/svg icon/save-file.svg";
import { getOptions, saveFilter } from "../../services/profile";

function Search() {
  const [formData, setFormData] = useState({
      location: [],
      marital_status: [],
      caste: [],
      mother_tongue: [],
      occupation: [],
      qualification: [],
      income: []
    }),
    heroData = {
      title: "Search Now",
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      isLoggedIn: true,
      isSmallBanner: true
    },
    history = useHistory(),
    handleChange = newValue => {
      setFormData({ ...formData, ...newValue });
    },
    { data: Options, isSuccess: OptionsSuccess } = useQuery(
      "getOptions",
      getOptions,
      {
        refetchOnWindowFocus: false
      }
    ),
    handleChipDelete = (name, deleteKey) => {
      setFormData({
        ...formData,
        [name]: formData[name].filter(({ key }) => key !== deleteKey)
      });
    },
    getKeysArr = arr => {
      return arr.map(a => a.key);
    },
    handleSubmit = e => {
      e.preventDefault();
      saveFilter({
        ...formData,
        marital_status: getKeysArr(formData.marital_status),
        location: getKeysArr(formData.location),
        mother_tongue: getKeysArr(formData.mother_tongue),
        occupation: getKeysArr(formData.occupation),
        qualification: getKeysArr(formData.qualification),
        income: getKeysArr(formData.income),
        caste: getKeysArr(formData.caste),
        religion: formData.religion.key
      });
      history.push("/searchresults");
    };

  useEffect(() => {
    OptionsSuccess && setFormData({
      gender: Options?.results?.gender[0].key,
      age: {
        from: 18,
        to: 18
      },
      religion: Options?.results?.religion[0],
      height: {
        from: Options?.results?.height[0].key,
        to: Options?.results?.height[0].key
      },
      location: [Options?.results?.location[0]],
      marital_status: [Options?.results?.marital_status[0]],
      caste: [],
      mother_tongue: [Options?.results?.mother_tongue[0]],
      occupation: [Options?.results?.occupation[0]],
      qualification: [Options?.results?.qualification[0]],
      income: [Options?.results?.income[0]]
    });
  }, [OptionsSuccess]);
  return (
    <Layout heroImg={Hero} heroData={heroData}>
      <section className="search col-lg-9 col-md-12 col-sm-12">
        <div className="search__header">
          <p className="search__header__title">Lorem Ipsum is simply dummy</p>
          <p className="search__header__subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="search__form">
          <Form onSubmit={handleSubmit}>
            <div className="search__form__controls">
              <div className="search__form__controls__group mb-3">
                <p className="search__form__controls__group__label">
                  Looking For
                </p>
                <div className="search__form__controls__group__wrapper">
                  <FormControl component="fieldset">
                    <RadioGroup
                      row
                      aria-label="gender"
                      name="gender"
                      value={+formData?.gender}
                      onChange={({ target: { name, value } }) =>
                        handleChange({ [name]: value })
                      }
                    >
                      {Options?.results?.gender.map(gen => (
                        <FormControlLabel
                          value={gen.key}
                          control={<Radio color="primary" />}
                          label={gen.value}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <div className="search__form__controls__group mb-3">
                <p className="search__form__controls__group__label">Age</p>
                <div className="search__form__controls__group__wrapper">
                  <TextField
                    type="number"
                    InputProps={{ inputProps: { min: 18 } }}
                    value={formData?.age?.from}
                    name="from"
                    className="search__form__controls__group__wrapper__control w-100"
                    onChange={({ target: { name, value } }) =>
                      handleChange({
                        age: { ...formData?.age, [name]: +value }
                      })
                    }
                  />

                  <TextField
                    type="number"
                    InputProps={{ inputProps: { min: 18 } }}
                    value={formData?.age?.to}
                    name="to"
                    className="search__form__controls__group__wrapper__control w-100"
                    onChange={({ target: { name, value } }) =>
                      handleChange({
                        age: { ...formData?.age, [name]: +value }
                      })
                    }
                  />
                </div>
              </div>
              <div className="search__form__controls__group  mb-3">
                <p className="search__form__controls__group__label">Location</p>
                <div className="search__form__controls__group__wrapper">
                  <Select
                    labelId="location"
                    className="w-100 my-2"
                    id="location"
                    name="location"
                    multiple
                    value={formData?.location}
                    onChange={({ target: { name, value } }) =>
                      handleChange({ [name]: value })
                    }
                    input={<Input id="select-location" />}
                    renderValue={selected => (
                      <div>
                        {selected?.map(select => (
                          <Chip
                            className="m-2"
                            variant="outlined"
                            key={select?.key}
                            clickable
                            value={select?.key}
                            label={select?.value}
                            onDelete={() =>
                              handleChipDelete("location", select?.key)
                            }
                            deleteIcon={
                              <span
                                class="text-dark"
                                onMouseDown={event => event.stopPropagation()}
                              >
                                &#10005;
                              </span>
                            }
                          />
                        ))}
                      </div>
                    )}
                  >
                    {Options?.results?.location.map(location => (
                      <MenuItem key={location.key} value={location}>
                        {location.value}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="search__form__controls__group mb-3">
                <p className="search__form__controls__group__label">Height</p>
                <div className="search__form__controls__group__wrapper">
                  <Select
                    labelId="demo-simple-select-label"
                    value={+formData?.height?.from}
                    name="from"
                    className="search__form__controls__group__wrapper__control w-100"
                    onChange={({ target: { name, value } }) =>
                      handleChange({
                        height: { ...formData?.height, [name]: value }
                      })
                    }
                  >
                    {Options?.results?.height.map(height => (
                      <MenuItem key={height.key} value={height.key}>
                        {height.value}
                      </MenuItem>
                    ))}
                  </Select>

                  <Select
                    name="to"
                    className="search__form__controls__group__wrapper__control w-100"
                    value={+formData?.height?.to}
                    onChange={({ target: { name, value } }) =>
                      handleChange({
                        height: { ...formData?.height, [name]: value }
                      })
                    }
                  >
                    {Options?.results?.height.map(height => (
                      <MenuItem key={height.key} value={height.key}>
                        {height.value}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="search__form__controls__group  mb-3">
                <p className="search__form__controls__group__label">
                  Marital Status
                </p>
                <div className="search__form__controls__group__wrapper">
                  <Select
                    labelId="marital_status"
                    className="w-100 my-2"
                    id="marital_status"
                    name="marital_status"
                    multiple
                    value={formData?.marital_status}
                    onChange={({ target: { name, value } }) =>
                      handleChange({ [name]: value })
                    }
                    input={<Input id="select-marital_status" />}
                    renderValue={selected => (
                      <div>
                        {selected?.map(select => (
                          <Chip
                            className="m-2"
                            variant="outlined"
                            key={select?.key}
                            clickable
                            value={select?.key}
                            label={select?.value}
                            onDelete={() =>
                              handleChipDelete("marital_status", select?.key)
                            }
                            deleteIcon={
                              <span
                                class="text-dark"
                                onMouseDown={event => event.stopPropagation()}
                              >
                                &#10005;
                              </span>
                            }
                          />
                        ))}
                      </div>
                    )}
                  >
                    {Options?.results?.marital_status.map(marital_status => (
                      <MenuItem key={marital_status.key} value={marital_status}>
                        {marital_status.value}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="search__form__controls__group  mb-3">
                <p className="search__form__controls__group__label">Religion</p>
                <div className="search__form__controls__group__wrapper">
                  <Select
                    labelId="religion"
                    className="w-100 my-2"
                    id="religion"
                    name="religion"
                    value={formData?.religion || ''}
                    onChange={({ target: { name, value } }) =>
                      handleChange({ [name]: value, caste: [] })
                    }
                    input={<Input id="select-religion" />}
                  >
                    {Options?.results?.religion.map(religion => (
                      <MenuItem key={religion.key} value={religion}>
                        {religion.value}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="search__form__controls__group  mb-3">
                <p className="search__form__controls__group__label">Caste</p>
                <div className="search__form__controls__group__wrapper">
                  <Select
                    labelId="caste"
                    className="w-100 my-2"
                    id="caste"
                    name="caste"
                    disabled={!formData.religion}
                    multiple
                    value={formData?.caste}
                    onChange={({ target: { name, value } }) =>
                      handleChange({ [name]: value })
                    }
                    input={<Input id="select-caste" />}
                    renderValue={selected => (
                      <div>
                        {!!formData.religion &&
                          selected?.map(select => (
                            <Chip
                              className="m-2"
                              variant="outlined"
                              key={select?.key}
                              clickable
                              value={select?.key}
                              label={select?.value}
                              onDelete={() =>
                                handleChipDelete("caste", select?.key)
                              }
                              deleteIcon={
                                <span
                                  class="text-dark"
                                  onMouseDown={event => event.stopPropagation()}
                                >
                                  &#10005;
                                </span>
                              }
                            />
                          ))}
                      </div>
                    )}
                  >
                    {formData?.religion &&
                      Options?.results?.caste[formData?.religion?.value].map(
                        caste => (
                          <MenuItem key={caste.key} value={caste}>
                            {caste.value}
                          </MenuItem>
                        )
                      )}
                  </Select>
                </div>
              </div>
              <div className="search__form__controls__group  mb-3">
                <p className="search__form__controls__group__label">
                  Mother Tongue
                </p>
                <div className="search__form__controls__group__wrapper">
                  <Select
                    labelId="mother_tongue"
                    className="w-100 my-2"
                    id="mother_tongue"
                    name="mother_tongue"
                    multiple
                    value={formData?.mother_tongue}
                    onChange={({ target: { name, value } }) =>
                      handleChange({ [name]: value })
                    }
                    input={<Input id="select-mother_tongue" />}
                    renderValue={selected => (
                      <div>
                        {selected?.map(select => (
                          <Chip
                            className="m-2"
                            variant="outlined"
                            key={select?.key}
                            clickable
                            value={select?.key}
                            label={select?.value}
                            onDelete={() =>
                              handleChipDelete("mother_tongue", select?.key)
                            }
                            deleteIcon={
                              <span
                                class="text-dark"
                                onMouseDown={event => event.stopPropagation()}
                              >
                                &#10005;
                              </span>
                            }
                          />
                        ))}
                      </div>
                    )}
                  >
                    {Options?.results?.mother_tongue.map(mother_tongue => (
                      <MenuItem key={mother_tongue.key} value={mother_tongue}>
                        {mother_tongue.value}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="search__form__controls__group  mb-3">
                <p className="search__form__controls__group__label">
                  Occupation
                </p>
                <div className="search__form__controls__group__wrapper">
                  <Select
                    labelId="occupation"
                    className="w-100 my-2"
                    id="occupation"
                    name="occupation"
                    multiple
                    value={formData?.occupation}
                    onChange={({ target: { name, value } }) =>
                      handleChange({ [name]: value })
                    }
                    input={<Input id="select-occupation" />}
                    renderValue={selected => (
                      <div>
                        {selected?.map(select => (
                          <Chip
                            className="m-2"
                            variant="outlined"
                            key={select?.key}
                            clickable
                            value={select?.key}
                            label={select?.value}
                            onDelete={() =>
                              handleChipDelete("occupation", select?.key)
                            }
                            deleteIcon={
                              <span
                                class="text-dark"
                                onMouseDown={event => event.stopPropagation()}
                              >
                                &#10005;
                              </span>
                            }
                          />
                        ))}
                      </div>
                    )}
                  >
                    {Options?.results?.occupation.map(occupation => (
                      <MenuItem key={occupation.key} value={occupation}>
                        {occupation.value}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="search__form__controls__group  mb-3">
                <p className="search__form__controls__group__label">
                  Qualification
                </p>
                <div className="search__form__controls__group__wrapper">
                  <Select
                    labelId="qualification"
                    className="w-100 my-2"
                    id="qualification"
                    name="qualification"
                    multiple
                    value={formData?.qualification}
                    onChange={({ target: { name, value } }) =>
                      handleChange({ [name]: value })
                    }
                    input={<Input id="select-qualification" />}
                    renderValue={selected => (
                      <div>
                        {selected?.map(select => (
                          <Chip
                            className="m-2"
                            variant="outlined"
                            key={select?.key}
                            clickable
                            value={select?.key}
                            label={select?.value}
                            onDelete={() =>
                              handleChipDelete("qualification", select?.key)
                            }
                            deleteIcon={
                              <span
                                class="text-dark"
                                onMouseDown={event => event.stopPropagation()}
                              >
                                &#10005;
                              </span>
                            }
                          />
                        ))}
                      </div>
                    )}
                  >
                    {Options?.results?.qualification.map(qualification => (
                      <MenuItem key={qualification.key} value={qualification}>
                        {qualification.value}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="search__form__controls__group  mb-3">
                <p className="search__form__controls__group__label">Income</p>
                <div className="search__form__controls__group__wrapper">
                  <Select
                    labelId="income"
                    className="w-100 my-2"
                    id="income"
                    name="income"
                    multiple
                    value={formData?.income}
                    onChange={({ target: { name, value } }) =>
                      handleChange({ [name]: value })
                    }
                    input={<Input id="select-income" />}
                    renderValue={selected => (
                      <div>
                        {selected?.map(select => (
                          <Chip
                            className="m-2"
                            variant="outlined"
                            key={select?.key}
                            clickable
                            value={select?.key}
                            label={select?.value}
                            onDelete={() =>
                              handleChipDelete("income", select?.key)
                            }
                            deleteIcon={
                              <span
                                class="text-dark"
                                onMouseDown={event => event.stopPropagation()}
                              >
                                &#10005;
                              </span>
                            }
                          />
                        ))}
                      </div>
                    )}
                  >
                    {Options?.results?.income.map(income => (
                      <MenuItem key={income.key} value={income}>
                        {income.value}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
            <div className="search__form__actions">
              <Button
                type="submit"
                className="search__form__actions__search"
              >
                <Image src={SaveSearch} alt="search" height={22} />
                SEARCH
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </Layout>
  );
}

export default Search;
