import React, { useState } from "react";
import { Card } from "antd";
import { EditOutlined } from "@ant-design/icons";

import RemoveContact from "../buttons/RemoveContact";
import UpdateContact from "../forms/UpdateContact";
import InnerCard from "../../cardDesign/InnerCard";
import { Link } from "react-router-dom";

const getStyles = () => ({
  card: {
    width: "500px",
    marginBottom: "100px",
  },
});

const Contact = (props) => {
  const [id] = useState(props.id);
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [editMode, setEditMode] = useState(false);
  const styles = getStyles();

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      default:
        break;
    }
  };

  const handleButtonClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      {editMode ? (
        <UpdateContact
          id={props.id}
          firstName={props.firstName}
          lastName={props.lastName}
          onButtonClick={handleButtonClick}
          updateStateVariable={updateStateVariable}
        />
      ) : (
        <Card
          style={styles.card}
          actions={[
            <EditOutlined key="edit" onClick={handleButtonClick} />,
            <RemoveContact id={id} firstName={firstName} lastName={lastName} />,
          ]}
        >
          <Card
            type="inner"
            title="Person"
            extra={
              <Link
                to={{
                  pathname: "/LearnMore",
                  state: { id: props.id },
                }}
              >
                Learn More
              </Link>
            }
          >
            {props.firstName} {props.lastName}
          </Card>
          <InnerCard firstName={firstName} lastName={lastName} id={id} />
          {/* {firstName} {lastName} */}
        </Card>
      )}
    </div>
  );
};

export default Contact;
