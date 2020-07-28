package types

import (
	"encoding/json"
)

// Entry describes an output which can be produced from a recipe
type Entry interface {
	String() string
}

// EntriesList is a struct to keep list of items and coins
type EntriesList []Entry

type serializeEntriesList struct {
	CoinOutputs       []CoinOutput
	ItemModifyOutputs []ItemModifyOutput
	ItemOutputs       []ItemOutput
}

func (wpl EntriesList) String() string {
	itm := "EntriesList{"

	for _, output := range wpl {
		itm += output.String() + ",\n"
	}

	itm += "}"
	return itm
}

// MarshalJSON is a custom marshal function
func (wpl EntriesList) MarshalJSON() ([]byte, error) {
	var sel serializeEntriesList
	for _, wp := range wpl {
		switch wp := wp.(type) {
		case CoinOutput:
			sel.CoinOutputs = append(sel.CoinOutputs, wp)
		case ItemModifyOutput:
			sel.ItemModifyOutputs = append(sel.ItemModifyOutputs, wp)
		case ItemOutput:
			sel.ItemOutputs = append(sel.ItemOutputs, wp)
		default:
		}
	}
	return json.Marshal(sel)
}

// UnmarshalJSON is a custom Unmarshal function
func (wpl *EntriesList) UnmarshalJSON(data []byte) error {
	var sel serializeEntriesList
	err := json.Unmarshal(data, &sel)
	if err != nil {
		return err
	}

	for _, co := range sel.CoinOutputs {
		*wpl = append(*wpl, co)
	}
	for _, io := range sel.ItemModifyOutputs {
		*wpl = append(*wpl, io)
	}
	for _, io := range sel.ItemOutputs {
		*wpl = append(*wpl, io)
	}
	return nil
}
